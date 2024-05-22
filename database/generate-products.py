import random as ran
import json as json
import shutil as sh

product_list = ("sock", "top", "bottom")
top_list = ("Polo Shirt", "T-Shirt", "Long-Sleeved Shirt", "Dress Shirt")
bottom_list = ("Shorts", "Khaki Pants", "Dress Pants")
sock_list = ("Ankle Socks", "Calf Socks", "Knee-High Socks", "Thigh-High Socks")
size_list = ("Small", "Medium", "Large", "Extra Large")
color_list = ("Red", "Green", "Blue", "Yellow")
pattern_list = ("Checkered", "Striped", "Solid", "Duck")
material_list = ("Cotton", "Nylon", "Polyester", "Carbon Fiber")
condition_list = ("New", "Used", "Refurbished")
for_foot_list = ("Right", "Left", "Universal")
yes_or_no_list = ("Yes", "No")
price_socks_list = ("$9.99", "$10.99", "$11.99", "$12.99", "$13.99", "$14.99")
price_bottoms_list = ("$24.99", "$25.99", "$26.99", "$27.99", "$28.99", "$29.99",
                      "$30.99", "$31.99", "$32.99", "$33.99", "$34.99", "$35.99", 
                      "$36.99", "$37.99", "$38.99", "$39.99")
price_tops_list = ("$19.99", "$20.99", "$21.99", "$22.99", "$23.99", "$24.99",
                   "$25.99", "$26.99", "$27.99", "$28.99", "$29.99", "$30.99",
                   "$31.99", "$32.99", "$33.99", "$34.99")
# ADD $ SYMBOL TO PRICES

def selectProductType():
    product = ran.choice(product_list)
    if product == "top":
        return product, ran.choice(top_list), ran.choice(price_tops_list)
    elif product == "bottom":
        return product, ran.choice(bottom_list), ran.choice(price_bottoms_list)
    elif product == "sock":
        return product, ran.choice(sock_list), ran.choice(price_socks_list)

def generate_product(id):
    product, type, price = selectProductType()
    product_template = {
        "id": id,
        "product": product,
        "type": type,
        "price": price,
        "size": ran.choice(size_list),
        "color": ran.choice(color_list),
        "pattern": ran.choice(pattern_list),
        "material": ran.choice(material_list),
        "condition": ran.choice(condition_list),
        "waterResistant": ran.choice(yes_or_no_list),
        "antiBacterial": ran.choice(yes_or_no_list)
    }
    return product_template

product_data = [generate_product(id + 1) for id in range(50)]
print('Successfully generated product data.')

with open('product_data.json', 'w') as file:
    json.dump(product_data, file)
print('Successfully wrote product data to json.')

sh.move('c:/EDP-Capstone-Project/database/product_data.json', 'c:/EDP-Capstone-Project/database/database-files/product_data.json')
print('Successfully moved json file to database-files folder.')
print('Script finished running!')