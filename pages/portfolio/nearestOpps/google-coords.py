from termios import CS5
from urllib import response
import requests
import json
import urllib.request
import pandas as pd


def create_data():
  """Creates the data."""
  data = {}
  data['API_key'] = 'AIzaSyCSM4ZLyGY9Wh1ZXaQ_cdUz3FnbQq43zz4'
  data['addresses'] = ['3610+Hacks+Cross+Rd+Memphis+TN', # depot
                       '1921+Elvis+Presley+Blvd+Memphis+TN',
                       '149+Union+Avenue+Memphis+TN',
                       '1034+Audubon+Drive+Memphis+TN',
                       '1532+Madison+Ave+Memphis+TN',
                       '706+Union+Ave+Memphis+TN',
                       '5959+Park+Ave+Memphis+TN',
                       '814+Scott+St+Memphis+TN',
                       '1005+Tillman+St+Memphis+TN',
                       '1921+Elvis+Presley+Blvd+Memphis+TN',
                       '149+Union+Avenue+Memphis+TN',
                       '1034+Audubon+Drive+Memphis+TN',
                       '1532+Madison+Ave+Memphis+TN',
                       '706+Union+Ave+Memphis+TN',
                       '5959+Park+Ave+Memphis+TN',
                       '814+Scott+St+Memphis+TN',
                       '1005+Tillman+St+Memphis+TN'
                      ]
  return data

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


def main():
  """Entry point of the program"""
  # Create the data.
  data = create_data()
  addresses = data['addresses']
  API_key = data['API_key']
  c = test_func(data)
  df = pd.DataFrame(c, columns =['lat','lng'])
  print(df)

  


if __name__ == '__main__':
  main()
