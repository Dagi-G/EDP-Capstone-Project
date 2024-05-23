import json as json
import csv as csv
import shutil as sh

JSON_SRC_PATH = 'c:/EDP-Capstone-Project/database/database-files/cart_test_data.json'
CSV_SRC_PATH = 'c:/EDP-Capstone-Project/database/cart_test.csv'
CSV_DST_PATH = 'c:/EDP-Capstone-Project/database/data-model-files/cart_test.csv'

with open(JSON_SRC_PATH) as json_file:
    json_data = json.load(json_file)

cart_data = json_data

csv_file = open('cart_test.csv', 'w')
csv_writer = csv.writer(csv_file)

count = 0

for cart_item in cart_data:
    if count == 0:
        header = cart_item.keys()
        csv_writer.writerow(header)
        count += 1
    
    csv_writer.writerow(cart_item.values())
csv_file.close()

sh.move(CSV_SRC_PATH, CSV_DST_PATH)