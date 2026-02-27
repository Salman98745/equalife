# 🩺 EquaLife: AI-Driven Pressure Ulcer Monitoring System

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Category](https://img.shields.io/badge/Category-Mathematics-orange)
![Stage](https://img.shields.io/badge/Project-Sabahın_Alimləri_2026-green)

**EquaLife** is an innovative wearable medical solution designed to prevent pressure ulcers (bedsores) in immobile patients. By combining Inertial Measurement Units (IMU), advanced trigonometric modeling, and Machine Learning, the system provides real-time posture tracking and automated alerts.

---

## 📖 Overview

Pressure ulcers remain a critical challenge in healthcare, caused by prolonged capillary compression. **EquaLife** eliminates subjective observation by using 3-axis sensors to calculate a patient's exact orientation in 3D space, ensuring timely repositioning through mathematical precision.

---

## 🧠 Mathematical Methodology & AI

As a project submitted under the **Mathematics** category, the core logic relies on geometric transformations and probabilistic classification.

### 1. Kinematic Orientation Model (Euler Angles)
Raw data from the MPU6050 accelerometer ($A_x, A_y, A_z$) is filtered to calculate the body's orientation. To avoid macro errors, we use standard trigonometric inverse functions:

* **Roll ($\phi$):** Determines lateral tilt (side-to-side).
    $$\phi = \arctan2(A_y, A_z)$$
* **Pitch ($\theta$):** Determines longitudinal tilt (head-to-toe).
    $$\theta = \arctan2(-A_x, \sqrt{A_y^2 + A_z^2})$$



### 2. Machine Learning Classification
The system utilizes a **Decision Tree** algorithm to classify patient states into four distinct categories: **Supine (Flat), Right Side, Left Side, and Active Motion.**

| Metric | Result |
| :--- | :--- |
| **Test Accuracy** | 98.4% |
| **Processing Latency** | 20ms |
| **Sampling Rate** | 100 Hz |



---

## 🛠 Tech Stack

### Hardware
* **Microcontroller:** Arduino Mega 2560 (Central Processing)
* **Sensors:** MPU6050 (MEMS Accelerometer & Gyroscope)
* **Feedback:** Piezoelectric Buzzer for auditory alerts
* **Communication:** I2C Protocol for high-speed data transfer

### Software & Analytics
* **Embedded C++:** Optimized for real-time sensor fusion.
* **Web Dashboard:** Built with HTML5 and CSS3 using a **Custom Responsive Grid** for scientific data visualization.
* **Math Rendering:** MathJax integration for LaTeX support.



---

## 📱 Responsive Web Architecture
The interface is engineered to maintain mathematical legibility across all devices:
* **Mathematical Grid:** Ensures LaTeX formulas do not break on mobile screens using `overflow-x: auto`.
* **Anatomical Mapping:** Responsive SVG mapping of critical pressure points (Sacrum, Occipital, Heels).
* **Live Dashboard:** Glassmorphism UI for real-time Pitch/Roll telemetry display.


---

## 🏅 Recognition
Developed for the **"Sabahın Alimləri" (Scientists of Tomorrow) XV National Competition** in the **Mathematics** category.

**Author:** Salman Sadikhzade, Omar Abdullayev  
**Year:** 2026  
**Category:** Mathematics / Bio-Medical Engineering
