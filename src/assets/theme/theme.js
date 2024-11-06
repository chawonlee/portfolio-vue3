const theme = {
  defaultTheme: 'light',
  themes: {
    light: {
      dark: false,
      colors: {
        // 🎨 Main & Sub Color
        primary: '#ff5722', // 메인 컬러
        'primary-sub': '#54FAC9', // 메인 서브 컬러
        secondary: '#1D3787', // 메인 네이비
        success: '#56CA00', // 성공
        info: '#16B1FF', // 알림
        warning: '#FFB400', // 경고
        error: '#FF4C51', // 에러

        // 🎨 Snackbar
        'snack-success': '#ECFAF6',
        'snack-success-border': '#3AC9A5',
        'snack-info': '#EDF3FE',
        'snack-info-border': '#4285F4',
        'snack-warning': '#FFFAE6',
        'snack-warning-border': '#FEC600',
        'snack-error': '#FFF0F0',
        'snack-error-border': '#FF6461',

        // 🎨 Tooltip
        'tooltip-main': '#C2C4D3',

        // 🎨 Favorite
        favorite: '#E82251', // 즐겨찾기

        // 🎨 Text
        'text-main': '#242C2A', // 메인 텍스트 컬러
        'text-main-reverse': '#FFFFFF', // 메인 텍스트 반대 컬러
        'text-main-info': '#666666', // 메인 텍스트 서브 정보
        'text-sub': '#9DA19F', // 서브 텍스트 컬러
        'text-disable': '#C9C9C9', // 텍스트 DISABLE

        // 🎨 Chart Text
        'chart-text': '#BCBEBE', // 차트 및 표 텍스트

        // 🎨 Point
        'point-primary': '#16B78E', // 포인트 메인
        'point-primary-sub': '#13D5AA', // 포인트 서브
        'point-orange': '#FF881B', // 포인트 주황
        'point-yellow': '#FFA41B', // 포인트 노랑

        // 🎨 Layout
        'layout-header-bg': '#FFFFFF', // 헤더 배경
        'layout-header-text': '#242C2A', // 헤더 텍스트
        'layout-header-text-hover': '#16b78e', // 헤더 Hover 텍스트
        'layout-header-reverse-text': '#FFFFFF', // 헤더 텍스트
        'layout-footer-bg': '#3F4044', // 푸터 배경
        'layout-footer-text': '#FFFFFF', // 푸터 텍스트
        'layout-navi-bg': '#FFFFFF', // 네비 배경
        'layout-navi-text': '#242C2A', // 네비 텍스트
        'layout-main-bg': '#FFFFFF', // 메인 배경

        // 🎨 Contents
        'contents-bg': '#FFFFFF', // 컨텐츠 배경
        'contents-border': '#EFF1F6', // 컨텐츠 라인
        'contents-text': '#242C2A', // 컨텐츠 텍스트

        // 🎨 Activ
        'active-main': '#F7F8FB', // 메인 active
        'active-sub': '#FCFCFC', // 서브 active

        // 🎨 Input & SelectBox
        'input-icon': '#AABBB8', // 인풋 아이콘
        'input-border': '#E4EBEA', // 인풋 라인
        'input-under': '#000000', // 인풋 언더바
        'input-text': '#242C2A', // 인풋 텍스트
        'input-place': '#D9D9D9', // 인풋 플레이스홀더
        'input-bg': '#F7F8FB', // 인풋 백그라운드

        // 🎨 Button
        'button-text': '#626463', // 버튼 텍스트
        'button-icon': '#626463', // 버튼 아이콘
        'button-border': '#E4EBEA', // 버튼 라인
        'button-off': '#F1F2F6', // 버튼 비활성화

        // 🎨 Icon
        icon: '#333333', // 아이콘 기본
        'icon-on': '#9DA19F', // 선택된 아이콘
        'icon-off': '#D9D9D9', // 선택안된 아이콘

        // 🎨 Table
        'table-bg': '#FFFFFF', // 테이블 배경
        'table-corss-bg': '#f4f7f7', // 테이블 배경
        'table-text': '#242C2A', // 테이블 텍스트
        'table-header-bg': '#F7F9F9', // 테이블 헤더 배경
        'table-header-text': '#242C2A', // 테이블 헤더 텍스트
        'table-border': '#D8E2E1', // 테이블 라인

        // 🎨 Tab / switch
        'tab-bg': '#FFFFFF', // 탭 배경
        'tab-border-off': '#EEF4F3', // 선택안된 탭 라인
        'tab-text-off': '#9DA19F', // 선택안된 탭 텍스트

        // 🎨 Buy
        buy: '#E82251', // 상승
        'buy-sub': '#FAD3DC', // 상승 서브
        'buy-lighten-1': '#FCF0F3', // 상승 lighten-1
        'buy-lighten-2': '#FFF8F9', // 상승 lighten-2

        // 🎨 Sell
        sell: '#002C9D', // 하락
        'sell-sub': '#D4DFFA', // 하락 서브
        'sell-lighten-1': '#EFF2FB', // 하락 lighten-1
        'sell-lighten-2': '#F3F5FB', // 하락 lighten-2
      },
      variables: {
        // Shadows
        'shadow-key-umbra-opacity': 'rgba(0, 0, 0, 0.08)',
        'shadow-key-penumbra-opacity': 'rgba(0, 0, 0, 0.12)',
        'shadow-key-ambient-opacity': 'rgba(0, 0, 0, 0.04)',
      },
    },
    dark: {
      dark: true,
      colors: {
        // 🎨 Main & Sub Color
        primary: '#9155FD', // 메인 컬러
        'primary-sub': '#9E6DF7', // 메인 서브 컬러
        secondary: '#1D3787', // 메인 네이비
        success: '#56CA00', // 성공
        info: '#16B1FF', // 알림
        warning: '#FFB400', // 경고
        error: '#FF4C51', // 에러

        // 🎨 Snackbar
        'snack-success': '#F7F8FB',
        'snack-success-border': '#9155FD',
        'snack-info': '#EDF3FE',
        'snack-info-border': '#4285F4',
        'snack-warning': '#FFFAE6',
        'snack-warning-border': '#FEC600',
        'snack-error': '#FFF0F0',
        'snack-error-border': '#FF6461',

        // 🎨 Tooltip
        'tooltip-main': '#C2C4D3',

        // 🎨 Favorite
        favorite: '#E82251', // 즐겨찾기

        // 🎨 Text
        'text-main': '#F4F7FF', // 메인 텍스트 컬러
        'text-main-reverse': '#000000', // 메인 텍스트 반대 컬러
        'text-main-info': '#666666', // 메인 텍스트 서브 정보
        'text-sub': '#E0E0E0', // 서브 텍스트 컬러
        'text-disable': '#C9C9C9', // 텍스트 DISABLE

        // 🎨 Chart Text
        'chart-text': '#F4F7FF', // 차트 및 표 텍스트

        // 🎨 Point
        'point-primary': '#7D43E6', // 포인트 메인
        'point-primary-sub': '#13D5AA', // 포인트 서브
        'point-orange': '#FF881B', // 포인트 주황
        'point-yellow': '#FFA41B', // 포인트 노랑

        // 🎨 Layout
        'layout-header-bg': '#312D4B', // 헤더 배경
        'layout-header-text': '#FFFFFF', // 헤더 텍스트
        'layout-header-text-hover': '#9155FD', // 헤더 Hover 텍스트
        'layout-header-reverse-text': '#312D4B', // 헤더 텍스트
        'layout-footer-bg': '#312D4B', // 푸터 배경
        'layout-footer-text': '#FFFFFF', // 푸터 텍스트
        'layout-navi-bg': '#312D4B', // 네비 배경
        'layout-navi-text': '#FFFFFF', // 네비 텍스트
        'layout-main-bg': '#4A5072', // 메인 배경

        // 🎨 Contents
        'contents-bg': '#312D4B', // 컨텐츠 배경
        'contents-border': '#312D4B', // 컨텐츠 라인
        'contents-text': '#D9D9D9', // 컨텐츠 텍스트

        // 🎨 Activ
        'active-main': '#4A5072', // 메인 active
        'active-sub': '#2A2E42', // 서브 active

        // 🎨 Input & SelectBox
        'input-icon': '#AABBB8', // 인풋 아이콘
        'input-border': '#4A5072', // 인풋 라인
        'input-under': '#FFFFFF', // 인풋 언더바
        'input-text': '#D9D9D9', // 인풋 텍스트
        'input-place': '#D9D9D9', // 인풋 플레이스홀더
        'input-bg': '#F7F8FB', // 인풋 백그라운드

        // 🎨 Button
        'button-text': '#F4F7FF', // 버튼 텍스트
        'button-icon': '#F4F7FF', // 버튼 아이콘
        'button-border': '#4A5072', // 버튼 라인
        'button-off': '#F1F2F6', // 버튼 비활성화

        // 🎨 Icon
        'icon-on': '#E7E3FC', // 선택된 아이콘
        'icon-off': '#D9D9D9', // 선택안된 아이콘

        // 🎨 Table
        'table-bg': '#312D4B', // 테이블 배경
        'table-corss-bg': '#312D4B', // 테이블 배경
        'table-text': '#FFFFFF', // 테이블 텍스트
        'table-header-bg': '#312D4B', // 테이블 헤더 배경
        'table-header-text': '#FFFFFF', // 테이블 헤더 텍스트
        'table-border': '#4A5072', // 테이블 라인

        // 🎨 Tab / switch
        'tab-bg': '#312D4B', // 탭 배경
        'tab-border-off': '#4A5072', // 선택안된 탭 라인
        'tab-text-off': '#D9D9D9', // 선택안된 탭 텍스트

        // 🎨 Buy
        buy: '#E82251', // 상승
        'buy-sub': '#FAD3DC', // 상승 서브
        'buy-lighten-1': '#FCF0F3', // 상승 lighten-1
        'buy-lighten-2': '#FFF8F9', // 상승 lighten-2

        // 🎨 Sell
        sell: '#002C9D', // 하락
        'sell-sub': '#D4DFFA', // 하락 서브
        'sell-lighten-1': '#EFF2FB', // 하락 lighten-1
        'sell-lighten-2': '#F3F5FB', // 하락 lighten-2
      },
      variables: {
        'medium-emphasis-opacity': 0.68,

        // Shadows
        'shadow-key-umbra-opacity': 'rgba(20, 18, 33, 0.08)',
        'shadow-key-penumbra-opacity': 'rgba(20, 18, 33, 0.12)',
        'shadow-key-ambient-opacity': 'rgba(20, 18, 33, 0.04)',
      },
    },
    ignsTheme: {
      dark: false,
      colors: {
        primary: '#9155FD', // 메인 컬러
        'primary-sub': '#9E6DF7', // 메인 서브 컬러
        secondary: '#1D3787', // 메인 네이비
        success: '#56CA00', // 성공
        info: '#16B1FF', // 알림
        warning: '#FFB400', // 경고
        error: '#FF4C51', // 에러
      },
    },
  },
}
export default theme
