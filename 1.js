function numBaseBall() {
  // 랜덤한 숫자3개 뽑기
  let secretNumbers = [];
  while (secretNumbers.length < 3) {
    let randomNumber = Math.floor(Math.random() * 10);
    if (!secretNumbers.includes(randomNumber)) {
      secretNumbers.push(randomNumber);
    }
  }
  let count = 0;
  while (true) {
    //입력양식
    let inputNumber = prompt("중복되지 않는 숫자 세자리를 입력해주세요");
    let changeNum = inputNumber.split("").map(Number);
    if (changeNum.length !== 3) {
      alert("숫자 3자리를 입력해주세요");
    } else if (changeNum.some((num) => isNaN(num))) {
      alert("숫자만 입력이 가능합니다.");
    } else if (new Set(changeNum).size < changeNum.length) {
      alert("숫자는 중복되지 않게 입력해주세요.");
    }
    //스트라이크 볼 숫자,위치 비교
    
    let strike = 0;
    let ball = 0;
    
    for (let i = 0; i < 3; i++) {
      if (secretNumbers[i] === changeNum[i]) {
        strike++;
      } else if (secretNumbers.includes(changeNum[i])) {
        ball++;
      }
    }

    count++;
    alert(`${strike}strike ${ball}ball입니다`);

    if (strike === 3) {
      alert(`${count}번째로 정답을 맞히셨습니다. 게임을 종료합니다.`);
      break;
    }
  }
}
numBaseBall();
