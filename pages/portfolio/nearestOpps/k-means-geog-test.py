from termios import CS5
import requests
import json
import urllib.request
import pandas as pd
import numpy as np
np.random.seed(8)

# Matplotlib and seaborn for plotting

import matplotlib
import matplotlib.pyplot as plt
matplotlib.rcParams['font.size'] = 24
matplotlib.rcParams['figure.figsize'] = (16, 9)
plt.style.use('ggplot')


from sklearn.cluster import KMeans

import warnings
warnings.filterwarnings('ignore')

df = pd.read_csv("/Users/andrewhilseberg/Downloads/ADDRESSES - Sheet2.csv", sep=",")

plt.scatter(df['Longitude'],df['Latitude'],c='green',s=40)
plt.show()

#elbow method
wcss = []

for i in range(1, 11):
    kmeans = KMeans(n_clusters = i, init = 'k-means++', max_iter = 300, n_init = 10, random_state = 0)
    kmeans.fit(df)
    wcss.append (kmeans.inertia_)

plt.plot(range(1, 11), wcss)
plt.title('The Elbow Method')
plt.xlabel('Number of clusters')
plt.ylabel('WCSS')
plt.show()

Kmean = KMeans(n_clusters=5)
Kmean.fit(df)

print(Kmean.cluster_centers_)

c1 = (-76.86901408, 38.9513615)
c2 = (-78.98271186, 39.57305085)
c3 = (-77.60413043, 39.52826087)
c4 = (-75.82777778, 38.37625)
c5 = (-76.22217949, 39.30397436)

def calculate_distance(centroid, X, Y):
    distances = []
        
    # Unpack the x and y coordinates of the centroid
    c_x, c_y = centroid
        
    # Iterate over the data points and calculate the distance using the           # given formula
    for x, y in list(zip(X, Y)):
        root_diff_x = (x - c_x) ** 2
        root_diff_y = (y - c_y) ** 2
        distance = np.sqrt(root_diff_x + root_diff_y)
        distances.append(distance)
          
    return distances


# Calculate the distance and assign them to the DataFrame accordingly
df['C1_Distance'] = calculate_distance(c1, df['Longitude'], df['Latitude'])
df['C2_Distance'] = calculate_distance(c2, df['Longitude'], df['Latitude'])
df['C3_Distance'] = calculate_distance(c3, df['Longitude'], df['Latitude'])
df['C4_Distance'] = calculate_distance(c4, df['Longitude'], df['Latitude'])
df['C5_Distance'] = calculate_distance(c5, df['Longitude'], df['Latitude'])


df['Cluster'] = df[['C1_Distance', 'C2_Distance', 'C3_Distance', 'C4_Distance', 'C5_Distance']].apply(np.argmin, axis=1)
print(df['Cluster'])
print(df)

plt.scatter(df['Longitude'], df['Latitude'], c=df['Cluster'], s=30)
plt.scatter(c1[0], c1[1], marker='o', s=200, c='black')
plt.scatter(c2[0], c2[1], marker='o', s=200, c='black')
plt.scatter(c3[0], c3[1], marker='o', s=200, c='black')
plt.scatter(c4[0], c4[1], marker='o', s=200, c='black')
plt.scatter(c5[0], c5[1], marker='o', s=200, c='black')
plt.title('Maryland Visit Clusters')
plt.xlabel('Longitude')
plt.ylabel('Latitude')
plt.show()

print(plt.rcParams['axes.prop_cycle'].by_key()['color'])