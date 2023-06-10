// TODO: 이 곳에 정답 코드를 작성해주세요.
// 1. 페이지가 로드 된 시점에 ID 입력 창에 Focus가 되어 있어야 합니다.
// 대상: ID 입력 input
// 이벤트: 페이지(window)가 로드 되었을 때
// 핸들러: Focus()

// 변수명 앞 $: DOM으로 가져온 변수
const $id = document.querySelector('#id');
window.addEventListener("load", () => $id.focus())



// 2. 유효성 검사 로직
// 대상: ID, 비밀번호, 비밀번호 확인 input
// 이벤트: (1) input focus out, (2) 가입하기 버튼을 눌렀을 때
// 핸들러: (1) 해당 input의 유효성 검사 (2) 모든 필드의 유효성 검사

const $pw = document.querySelector('#pw');
const $pwCheck = document.getElementById('pw-check');

// ID 유효성 검사 대상 정규표현식
let ID_REGEX = new RegExp("^[a-z0-9_-]{5,20}$");
// let ID_REGEX = "/^[a-z0-9_-]{5,20}$/";

let PW_REGEX = new RegExp("^[a-zA-Z0-9]{8,16}$");

const checkIdValidation = () => {
  // (공통) 모든 필드의 값은 빠짐 없이 입력해야 합니다.
  // 5~20자. 영문 소문자, 숫자, 특수기호(_), (-)만 사용 가능
  const isValidId = ID_REGEX.test($id.value)
  console.log(isValidId);
};
$id.addEventListener('focusout', checkIdValidation);

const checkPwValidation = (e) => {
  // 8~16자. 영문 대/소문자, 숫자 사용 가능
  const isValidPw = PW_REGEX.test($pw.value)
  console.log(isValidPw);
};
$pw.addEventListener('focusout', checkPwValidation);

const checkPwCheckValidation = (e) => {
  // 비밀번호와 일치
  const isValidPwCheck = $pw.value === $pwCheck.value;
  console.log(isValidPwCheck);
};
$pwCheck.addEventListener('focusout', checkPwCheckValidation);

const $submit = document.getElementById('submit');
$submit.addEventListener('click', (e) => {
  e.preventDefault();  
  checkIdValidation();
  checkPwValidation();
  checkPwCheckValidation();
});




