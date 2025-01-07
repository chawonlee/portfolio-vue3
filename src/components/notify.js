import { toast } from 'vue3-toastify'

/**
 * ✏️ 푸쉬알람
 * @param {String} location 위치
 * @param {String} type 종류
 * @param {String} msg 메시지
 */
export function notify(type, title, msg) {
  let setMsg = `<span class="text-text-main font-weight-medium text-normal">${title}</span><br><span class="text-text-sub text-small">${msg}</span>`
  let setLocation = toast.POSITION.TOP_CENTER
  let setType = ''
  switch (type) {
    case 'success':
      setType = toast.TYPE.SUCCESS
      break
    case 'info':
      setType = toast.TYPE.INFO
      break
    case 'warning':
      setType = toast.TYPE.WARNING
      break
    case 'error':
      setType = toast.TYPE.ERROR
      break
    default:
      setType = toast.TYPE.DEFAULT
      break
  }
  const options = {
    position: setLocation, // 위치 : top-right, top-center, top-left, bottom-right, bottom-center, bottom-left
    dangerouslyHTMLString: true, // msg 안에 html 허용
    autoClose: 3000, // 자동 닫기 : false || millisecond
    closeOnClick: true, // 닫기 버튼 여부 : true / false
    transition: toast.TRANSITIONS.SLIDE, // 전환 애니메이션 : bounce, flip, slide, zoom
    hideProgressBar: true, // 진행바 : true, false
    pauseOnHover: true, // 호버시 일시정지 : true, false
    closeButton: true, // 닫기버튼 : true, false
    icon: true, // 아이콘 : true, false, string
    type: setType, // 타입 : success, info, warning, error, default
  }
  toast(setMsg, options)
}
