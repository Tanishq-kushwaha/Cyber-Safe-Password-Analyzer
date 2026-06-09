# Cyber-Safe Password Analyzer

A lightweight, high-performance web application designed to evaluate password strength in real-time. Built entirely with semantic HTML5, modern vanilla CSS, and pure JavaScript, this tool provides instant visual feedback based on standard cryptographic complexity rules.

## 🚀 Live Demo
You can test the live application here: [Cyber-Safe Password Analyzer](https://tanishq-kushwaha.github.io/Cyber-Safe-Password-Analyzer/)

## ⚡ Features
- **Real-Time Validation:** Evaluates password criteria instantly as the user types using optimized event handling.
- **5-Stage Security Checklist:** Tracks compliance across five core validation rules:
  - Minimum length of 8 characters.
  - Inclusion of at least one uppercase letter (`A-Z`).
  - Inclusion of at least one lowercase letter (`a-z`).
  - Inclusion of at least one numeric digit (`0-9`).
  - Inclusion of at least one special symbol (implemented via advanced regex negation).
- **Dynamic Strength Bar:** Features a responsive visual progress indicator that dynamically adjusts its width (20% increments per rule met) and color thresholds:
  - 🔴 **Weak (Score ≤ 2):** Red indicator
  - 🟠 **Medium (Score 3-4):** Orange indicator
  - 🟢 **Strong (Score 5):** Green indicator
- **Zero Dependencies:** Formulated completely without external frameworks to maintain a minimal digital footprint and optimize load performance.

## 🛠️ Tech Stack
- **Structure:** HTML5 (Semantic elements)
- **Styling:** CSS3 (Flexbox layout, custom dark-theme aesthetic, smooth transition animations)
- **Logic Engine:** Vanilla JavaScript (ES6+, DOM Manipulation, Regular Expressions Engine)

## 🧠 Underlying Logic Breakdown
1. **DOM Selection:** Scopes and targets document nodes efficiently using highly specific selectors to protect scope integrity.
2. **Event Tracking:** Listens to the `input` event on the target credential field to avoid unnecessary UI lag.
3. **Regex Pattern Matching:** Utilizes custom-tuned regular expressions—specifically employing negation pattern recognition `/[^A-Za-z0-9]/` for absolute symbol verification—to strictly score password validity.

## 🔧 Local Setup
To run this project locally:
1. Clone the repository:
   ```bash
   git clone [https://github.com/tanishq-kushwaha/Cyber-Safe-Password-Analyzer.git](https://github.com/tanishq-kushwaha/Cyber-Safe-Password-Analyzer.git)
