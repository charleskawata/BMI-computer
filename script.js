const weightBox = document.querySelector("#weight")
const heightBox = document.querySelector("#height")
const bmiSpan = document.querySelector("#BMI")

function computeBMI() {
  const weight = weightBox.value 
  const height = heightBox.value 
  const bmi = weight / height ** 2
  bmiSpan.textContent = bmi
}

weightBox.addEventListener('input', computeBMI)
heightBox.addEventListener('input', computeBMI)
