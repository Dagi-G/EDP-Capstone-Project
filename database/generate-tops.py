import random as ran
import json as json
import shutil as sh

type_list = ("Polo Shirt", "T-Shirt", "Long-Sleeved Shirt", "Dress Shirt")
size_list = ("Small", "Medium", "Large", "Extra Large")
color_list = ("Red", "Green", "Blue", "Yellow")
pattern_list = ("Checkered", "Striped", "Solid", "Duck")
material_list = ("Cotton", "Nylon", "Polyester", "Carbon Fiber")
condition_list = ("New", "Used", "Refurbished")
for_foot_list = ("Right", "Left", "Universal")
yes_or_no_list = ("Yes", "No")

def generate_top(top_id):
    top_template = {
        "id": top_id,
        "Type": ran.choice(type_list),
        'topDetails': {
            "Size": ran.choice(size_list),
            "Color": ran.choice(color_list),
            "Pattern": ran.choice(pattern_list),
            "Material": ran.choice(material_list),
            "Condition": ran.choice(condition_list),

        },
        'additionalDetails': {
            "WaterResistant": ran.choice(yes_or_no_list),
            "Pockets": ran.choice(yes_or_no_list),
            "AntiBacterial": ran.choice(yes_or_no_list)
        }
    }
    return top_template

top_data = [generate_top(id + 1) for id in range(5)]
print('Successfully generated top data.')

with open('top_data.json', 'w') as file:
    json.dump(top_data, file)
print('Successfully wrote top data to json.')

sh.move('c:/EDP-Capstone-Project/database/top_data.json', 'c:/EDP-Capstone-Project/database/database-files/top_data.json')
print('Successfully moved json file to database-files folder.')
print('Script finished running!')