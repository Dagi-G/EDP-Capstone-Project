import json as json
import csv as csv

with open('/database-files/cart.json') as json_file:
    json_data = json.load(json_file)

sock_data = json_data["socks_in_cart"]
tops_data = json_data["tops_in_cart"]
bottoms_data = json_data["bottoms_in_cart"]

csv_file = open('cart.csv', 'w')
csv_writer = csv.writer(csv_file)

#ADD MORE LATER