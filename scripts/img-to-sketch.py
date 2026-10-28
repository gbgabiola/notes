# pip install opencv-python
import cv2

image = cv2.imread("image.jph")

gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
inverted = 255 - gray
blurred = cv2.GaussianBlur(inverted, (21, 21), 8)
inverted_blurred = 255 - blurred

sketch = cv2.divide(gray, inverted_blurred, scale=256.0)

cv2.imwrite("sketch.jpg", sketch)
