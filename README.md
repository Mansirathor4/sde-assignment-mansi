# Merge Time Ranges - NodeJS Module

This project provides a Node.js module that merges discontinuous time ranges within a given threshold.  
It ensures that overlapping ranges, touching ranges, or ranges separated by a small gap are merged into a single continuous time range.

## 🚀 Setup & Installation

Make sure Node.js is installed.  
Run the below command to install project dependencies (if any in future):

```bash
npm install


To test the module with sample inputs, run: node test.js
 and 
 To allow the user to enter custom ranges at runtime: node userInput.js
 for example :Enter ranges (e.g. [[1000,2000],[2500,4000]]): [[1000,2000],[2500,4000],[3900,4100]]
Enter threshold value: 200
