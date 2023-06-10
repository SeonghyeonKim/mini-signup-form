// TODO: 이 곳에 정답 코드를 작성해주세요.
// 1. 페이지가 로드 된 시점에 ID 입력 창에 Focus가 되어 있어야 합니다.
// 대상: ID 입력 input
// 이벤트: 페이지(window)가 로드 되었을 때
// 핸들러: Focus()

// 변수명 앞 $: DOM으로 가져온 변수
const $id = document.querySelector('#id');
const $idMsg = document.querySelector('#id-msg');
window.addEventListener("load", () => $id.focus())



// 2. 유효성 검사 로직
// 대상: ID, 비밀번호, 비밀번호 확인 input
// 이벤트: (1) input focus out, (2) 가입하기 버튼을 눌렀을 때
// 핸들러: (1) 해당 input의 유효성 검사 (2) 모든 필드의 유효성 검사

const $pw = document.querySelector('#pw');
const $pwMsg = document.getElementById('pw-msg');

const $pwCheck = document.getElementById('pw-check');
const $pwCheckMsg = document.getElementById('pw-check-msg');

// ID 유효성 검사 대상 정규표현식
let ID_REGEX = new RegExp("^[a-z0-9_-]{5,20}$");
// let ID_REGEX = "/^[a-z0-9_-]{5,20}$/";

let PW_REGEX = new RegExp("^[a-zA-Z0-9]{8,16}$");

const ID_ERROR_MSG = {
  required: '필수 정보입니다.',
  invalid: '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.',
};

const PW_ERROR_MSG = {
  required: '필수 정보입니다.',
  invalid: '8~16자. 영문 대/소문자, 숫자를 사용하세요.',
};

const PW_CHECK_ERROR_MSG = {
  required: '필수 정보입니다.',
  invalid: '비밀번호가 일치하지 않습니다.',
};

const checkIdValidation = () => {
  // (공통) 모든 필드의 값은 빠짐 없이 입력해야 합니다.
  // 5~20자. 영문 소문자, 숫자, 특수기호(_), (-)만 사용 가능
  let isValidId;
  if($id.value.length === 0) {
    isValidId = 'required';
  }
  else {
    isValidId = ID_REGEX.test($id.value) ? true : 'invalid';
  }
  // 3. 커스텀 에러 메시지
  // (1) 비어 있을 때 (2) 유효하지 않은 값일때
  // input 태그에 border-red-600 class 추가 & **-msg div에 에러 메시지 추가
  if(isValidId !== true) {
    // isValidId -> invalid, required
    $id.classList.add('border-red-600');
    $idMsg.innerText = ID_ERROR_MSG[isValidId];
  }
  else {
    $id.classList.remove('border-red-600');
    $idMsg.innerText = '';
  }
};
$id.addEventListener('focusout', checkIdValidation);


const checkPwValidation = (e) => {
  // 8~16자. 영문 대/소문자, 숫자 사용 가능
  let isValidPw; 
  if($pw.value.length === 0) {
    isValidPw = 'required';
  }
  else {
    isValidPw = PW_REGEX.test($pw.value) ? true : 'invalid';
  }

  if(isValidPw !== true) {
    // isValidPw -> invalid, required
    $pw.classList.add('border-red-600');
    $pwMsg.innerText = PW_ERROR_MSG[isValidPw];
  }
  else {
    $pw.classList.remove('border-red-600');
    $pwMsg.innerText = '';
  }
};
$pw.addEventListener('focusout', checkPwValidation);

const checkPwCheckValidation = (e) => {
  // 비밀번호와 일치
  let isValidPwCheck;
  if($pwCheck.value.length === 0) {
    isValidPwCheck = 'required';
  }
  else {
    isValidPwCheck = $pw.value === $pwCheck.value ? true : 'invalid';
  }
  if(isValidPwCheck !== true) {
    // isValidPwCheck -> invalid, required
    $pwCheck.classList.add('border-red-600');
    $pwCheckMsg.innerText = PW_Check_ERROR_MSG[isValidPwCheck];
  }
  else {
    $pwCheck.classList.remove('border-red-600');
    $pwCheckMsg.innerText = '';
  }
};
$pwCheck.addEventListener('focusout', checkPwCheckValidation);

const $submit = document.getElementById('submit');
$submit.addEventListener('click', (e) => {
  e.preventDefault();  
  checkIdValidation();
  checkPwValidation();
  checkPwCheckValidation();
});



