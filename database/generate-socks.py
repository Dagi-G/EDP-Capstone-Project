import random as ran
import json as json
import shutil as sh

size_list = ("Small", "Medium", "Large", "Extra Large")
color_list = ("Red", "Green", "Blue", "Yellow")
pattern_list = ("Checkered", "Striped", "Solid", "Duck")
material_list = ("Cotton", "Nylon", "Polyester", "Carbon Fiber")
condition_list = ("New", "Used", "Refurbished")
for_foot_list = ("Right", "Left", "Universal")
yes_or_no_list = ("Yes", "No")

def generate_sock(sock_id):
    sock_template = {
        "id": sock_id,
        "Size": ran.choice(size_list),
        "Color": ran.choice(color_list),
        "Pattern": ran.choice(pattern_list),
        "Material": ran.choice(material_list),
        "Condition": ran.choice(condition_list),
        "ForFoot": ran.choice(for_foot_list),
        "WaterResistant": ran.choice(yes_or_no_list),
        "Padded": ran.choice(yes_or_no_list),
        "AntiBacterial": ran.choice(yes_or_no_list)
    }
    return sock_template

sock_data = [generate_sock(id + 1) for id in range(5)]
print('Successfully generated sock data.')

with open('sock_data.json', 'w') as file:
    json.dump(sock_data, file)
print('Successfully wrote sock data to json.')

sh.move('c:/EDP-Capstone-Project/database/sock_data.json', 'c:/EDP-Capstone-Project/database/database-files/sock_data.json')
print('Successfully moved json file to database-files folder.')
print('Script finished running!')