import cv2
import pytesseract
import numpy as np
import requests

# Define fixed region (x, y, w, h) for stake.com table (update as needed)
CARD_REGION = (100, 200, 800, 300)  # Example values, adjust for your setup

def grab_screen(region):
    from PIL import ImageGrab
    img = ImageGrab.grab(bbox=region)
    return cv2.cvtColor(np.array(img), cv2.COLOR_RGB2BGR)

def extract_cards(image):
    # Preprocess image for OCR
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    _, thresh = cv2.threshold(gray, 180, 255, cv2.THRESH_BINARY_INV)
    text = pytesseract.image_to_string(thresh)
    # Simple card parsing logic
    cards = [t.strip() for t in text.split() if t.strip()]
    return cards

def send_table_state(cards):
    payload = {
        "players": [
            {"name": "Player 1", "cards": cards, "is_you": True},
        ],
        "dealer": {"name": "Dealer", "cards": [], "is_you": False},
        "mode": "automatic"
    }
    res = requests.post("http://localhost:8000/statistics", json=payload)
    print(res.json())

if __name__ == "__main__":
    print("Capturing screen region for cards...")
    img = grab_screen(CARD_REGION)
    cards = extract_cards(img)
    print("Detected cards:", cards)
    send_table_state(cards)