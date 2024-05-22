import random as ran
import json as json
import shutil as sh

type_list = ("Shorts", "Khaki Pants", "Dress Pants")
size_list = ("Small", "Medium", "Large", "Extra Large")
color_list = ("Red", "Green", "Blue", "Yellow")
pattern_list = ("Checkered", "Striped", "Solid", "Duck")
material_list = ("Cotton", "Nylon", "Polyester", "Leather")
condition_list = ("New", "Used", "Refurbished")
for_foot_list = ("Right", "Left", "Universal")
yes_or_no_list = ("Yes", "No")

def generate_bottom(bottom_id):
    bottom_template = {
        "id": bottom_id,
        "Type": ran.choice(type_list),
        "Size": ran.choice(size_list),
        "Color": ran.choice(color_list),
        "Pattern": ran.choice(pattern_list),
        "Material": ran.choice(material_list),
        "Condition": ran.choice(condition_list),
        "WaterResistant": ran.choice(yes_or_no_list),
        "RearPadding": ran.choice(yes_or_no_list),
        "AntiBacterial": ran.choice(yes_or_no_list)
    }
    return bottom_template

bottom_data = [generate_bottom(id + 1) for id in range(5)]
print('Successfully generated bottom data.')

with open('bottom_data.json', 'w') as file:
    json.dump(bottom_data, file)
print('Successfully wrote bottom data to json.')

sh.move('c:/EDP-Capstone-Project/database/bottom_data.json', 'c:/EDP-Capstone-Project/database/database-files/bottom_data.json')
print('Successfully moved json file to database-files folder.')
print('Script finished running!')