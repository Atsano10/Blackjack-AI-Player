# OCR script for automatic card detection

import cv2
import pytesseract

# Load the image
image_path = 'path_to_card_image.jpg'
image = cv2.imread(image_path)

# Convert the image to gray scale
gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# Use pytesseract to do OCR on the image
custom_config = r'--oem 3 --psm 6'
text = pytesseract.image_to_string(gray_image, config=custom_config)

# Print the detected text
print(text)
