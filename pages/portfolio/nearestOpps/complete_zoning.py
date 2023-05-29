from termios import CS5
from urllib import response
import requests
import json
import urllib.request
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
from sklearn.decomposition import PCA
from sklearn.cluster import AgglomerativeClustering
from sklearn.preprocessing import StandardScaler, normalize
from sklearn.metrics import silhouette_score
import scipy.cluster.hierarchy as shc


#----Create Data----------------------------------------------------------------
def create_data():
  """Creates the data."""
  data = {}
  data['API_key'] = 'AIzaSyCSM4ZLyGY9Wh1ZXaQ_cdUz3FnbQq43zz4'
  data['addresses'] = ['10568+Cliff+Rd+Chestertown+MD+21620',
'22170+Great+Oak+Landing+Rd+Chestertown+MD+21620',
'601+SEAWAVE+CT+MIDDLE+RIVER+MD+21220-2379+USA',
'40+OAK+GROVE+DR+MIDDLE+RIVER+MD+21220-3387+USA',
'1+CONTACT+CT+MIDDLE+RIVER+MD+21220-3513+USA',
'201+ENDSLEIGH+AVE+MIDDLE+RIVER+MD+21220-3612+USA',
'200+SHAGBARK+RD+MIDDLE+RIVER+MD+21220-3902+USA',
'1701+LELAND+AVE+MIDDLE+RIVER+MD+21220-3924+USA',
'1405+WILSON+POINT+RD+APT+A+MIDDLE+RIVER+MD+21220-5400+USA',
'100+SHININGFIELD+CT+MIDDLE+RIVER+MD+21220-1770+USA',
'508+CARROLLWOOD+RD+MIDDLE+RIVER+MD+21220-3112+USA',
'3+QUIET+STREAM+CT+LUTHERVILLE+TIMONIUM+MD+21093-1015+USA',
'11+ELPHIN+CT+LUTHERVILLE+TIMONIUM+MD+21093-1834+USA',
'406+W+TIMONIUM+RD+LUTHERVILLE+TIMONIUM+MD+21093-2931+USA',
'12000+TRALEE+RD+LUTHERVILLE+TIMONIUM+MD+21093-3813+USA',
'2000+POT+SPRING+RD+LUTHERVILLE+TIMONIUM+MD+21093-4335+USA',
'1+WESTBURY+RD+LUTHERVILLE+TIMONIUM+MD+21093-5537+USA',
'1+ELPHIN+CT+UNIT+201+LUTHERVILLE+TIMONIUM+MD+21093-7732+USA',
'2107+SUBURBAN+GREENS+DR+LUTHERVILLE+TIMONIUM+MD+21093-3327+USA',
'20+E+TIMONIUM+RD+STE+200+LUTHERVILLE+TIMONIUM+MD+21093-3456+USA',
'713+MIDWAY+AVE+APT+226+MOUNT+AIRY+MD+21771-2858+USA',
'17101+HARDY+RD+MOUNT+AIRY+MD+21771-3216+USA',
'13601+OLD+NATIONAL+PIKE+MOUNT+AIRY+MD+21771-5909+USA',
'6001+BUFFALO+RD+MOUNT+AIRY+MD+21771-7421+USA']
  return data


#----Build Drive Distance Matrix from Google API-------------------
def create_distance_matrix(data):
  addresses = data["addresses"]
  API_key = data["API_key"]
  # Distance Matrix API only accepts 100 elements per request, so get rows in multiple requests.
  max_elements = 100
  num_addresses = len(addresses) # 16 in this example.
  # Maximum number of rows that can be computed per request (6 in this example).
  max_rows = max_elements // num_addresses
  # num_addresses = q * max_rows + r (q = 2 and r = 4 in this example).
  q, r = divmod(num_addresses, max_rows)
  dest_addresses = addresses
  distance_matrix = []
  # Send q requests, returning max_rows rows per request.
  for i in range(q):
    origin_addresses = addresses[i * max_rows: (i + 1) * max_rows]
    response = send_request(origin_addresses, dest_addresses, API_key)
    distance_matrix += build_distance_matrix(response)

  # Get the remaining remaining r rows, if necessary.
  if r > 0:
    origin_addresses = addresses[q * max_rows: q * max_rows + r]
    response = send_request(origin_addresses, dest_addresses, API_key)
    distance_matrix += build_distance_matrix(response)
  return distance_matrix

def send_request(origin_addresses, dest_addresses, API_key):
  """ Build and send request for the given origin and destination addresses."""
  def build_address_str(addresses):
    # Build a pipe-separated string of addresses
    address_str = ''
    for i in range(len(addresses) - 1):
      address_str += addresses[i] + '|'
    address_str += addresses[-1]
    return address_str

  request = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial'
  origin_address_str = build_address_str(origin_addresses)
  dest_address_str = build_address_str(dest_addresses)
  request = request + '&origins=' + origin_address_str + '&destinations=' + \
                       dest_address_str + '&key=' + API_key
  jsonResult = urllib.request.urlopen(request).read()
  response = json.loads(jsonResult)
  return response

def build_distance_matrix(response):
  distance_matrix = []
  for row in response['rows']:
    #duration is seconds of drive time
    row_list = [row['elements'][j]['duration']['value'] for j in range(len(row['elements']))]
    distance_matrix.append(row_list)
  return distance_matrix


#--------------------------------Get geo coordinates from Google-------------------------
def test_func(data):
  num_addresses = len(data['addresses'])
  API_key = data["API_key"]
  coord_array = []
  # Send q requests, returning max_rows rows per request.
  # for i in range(num_addresses):
  for i in range(len(data['addresses'])):
    request = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + data['addresses'][i] + '&key=' + API_key
    jsonResult = urllib.request.urlopen(request).read()
    response = json.loads(jsonResult)
    coords = response['results'][0]['geometry']['location']
    coord_array.append(coords)
  # print(coord_array)
  return coord_array


#----Main--------------------------------------
def main():
  """Entry point of the program"""
  # Create the data.
  data = create_data()
  addresses = data['addresses']
  API_key = data['API_key']
  distance_matrix = create_distance_matrix(data)
  print(distance_matrix)
  c = test_func(data)
  df = pd.DataFrame(c, columns =['lat','lng'])
  
  X = np.array(distance_matrix)
  clustering = AgglomerativeClustering(n_clusters=2).fit(X)
  AgglomerativeClustering(n_clusters=2)
  print(clustering.labels_)

  df['cluster_label'] = clustering.labels_

  plt.scatter(df['lng'],df['lat'],c=df['cluster_label'],s=40)
  plt.title('Maryland Driving Distance Clusters')
  plt.xlabel('Longitude')
  plt.ylabel('Latitude')
  plt.show()


if __name__ == '__main__':
  main()
