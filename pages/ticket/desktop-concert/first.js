import React, { useRef, useEffect, useState } from 'react'
import FixedContentLayout from '@/components/layout/ticket-layout/desktopLayout/fixedContentLayout'
import Mask from '@/components/ticket/mask'
import Start from '@/components/ticket/start'
import ProgressBar from '@/components/ticket/progressBar'
import Title from '@/components/ticket/phone-concert/title'
import Phone3D from '@/components/ticket/phone-concert/phone3D'
import Left from '@/components/ticket/desktop-concert/first/Left'
import Right from '@/components/ticket/desktop-concert/first/Right'
import style from '@/styles/ticket/desktop-concert/first.module.scss'

export default function First() {
  // #region 動態獲取 breadcrumb、progressBar 高度，返回給 content

  // breadcrumbRef 和 progressBarRef 是用來獲取 DOM 元素的引用
  // contentHeight 是一個狀態變量，用來保存內容區域的高度
  const breadcrumbRef = useRef(null)
  const progressBarRef = useRef(null)
  const [contentHeight, setContentHeight] = useState('100%')
  const [isStarted, setIsStarted] = useState(false)
  const [isPhoneView, setIsPhoneView] = useState(false)

  // useEffect 用於在組件渲染後執行副作用，比如事件監聽器的添加和清理
  useEffect(() => {
    // handleResize 函數計算 breadcrumb 和 progressBar 的總高度，並設置 contentHeight 狀態變量
    // breadcrumbRef.current.offsetHeight 和 progressBarRef.current.offsetHeight 分別獲取 breadcrumb 和 progressBar 元素的高度
    // availableHeight 是可用的內容高度，計算方式為 100% 減去 breadcrumb 和 progressBar 的總高度
    // setContentHeight 更新 contentHeight 狀態
    const handleResize = () => {
      if (breadcrumbRef.current && progressBarRef.current) {
        const breadcrumbHeight = breadcrumbRef.current.offsetHeight
        const progressBarHeight = progressBarRef.current.offsetHeight
        const availableHeight = `calc(100% - ${
          breadcrumbHeight + progressBarHeight
        }px)`
        setContentHeight(availableHeight)
      }
      setIsPhoneView(window.innerWidth <= 390)
    }

    // 初次計算內容高度，確保在組件首次渲染時設置正確的高度
    handleResize()

    // 當窗口大小改變時，重新計算內容高度
    window.addEventListener('resize', handleResize)

    // ResizeObserver 用於監聽 breadcrumb 和 progressBar 高度的變化
    // observer.observe 監聽這些 DOM 元素的變化，如果有變化就調用 handleResize
    const observer = new ResizeObserver(handleResize)
    const breadcrumbNode = breadcrumbRef.current
    const progressBarNode = progressBarRef.current
    if (breadcrumbNode) observer.observe(breadcrumbNode)
    if (progressBarNode) observer.observe(progressBarNode)

    // 在組件卸載時，移除事件監聽器和 ResizeObserver 監聽
    // 確保不會有內存洩漏或者多餘的事件監聽器影響性能
    return () => {
      window.removeEventListener('resize', handleResize)
      if (breadcrumbNode) observer.unobserve(breadcrumbNode)
      if (progressBarNode) observer.unobserve(progressBarNode)
    }
  }, [])

  // #endregion 動態獲取 breadcrumb、progressBar 高度，返回給 content

  const handleStart = () => {
    setIsStarted(true)
  }

  // #region PhoneView

  if (isPhoneView) {
    return (
      <>
        {!isStarted && (
          <>
            {/* Mask */}
            <Mask />

            {/* Start */}
            <Start onStart={handleStart} />
          </>
        )}

        <Title />

        <ProgressBar progressBarRef={progressBarRef} isStarted={isStarted} />

        <Phone3D />
      </>
    )
  }

  // #endregion PhoneView

  // #region DesktopView

  return (
    <>
      {!isStarted && (
        <>
          {/* Mask */}
          <Mask />

          {/* Start */}
          <Start onStart={handleStart} />
        </>
      )}

      {/* breadcrumb */}
      <div ref={breadcrumbRef} className={`${style.breadcrumb} row`}>
        <div className="col-12 p-0 bg-warning"></div>
      </div>

      {/* progressBar + timeCounter */}
      <ProgressBar progressBarRef={progressBarRef} isStarted={isStarted} />

      {/* content */}
      <div className="row d-flex flex-nowrap" style={{ height: contentHeight }}>
        {/* Left */}
        <Left />

        {/* Right */}
        <Right />
      </div>
    </>
  )

  // #endregion DesktopView
}

First.getLayout = function getLayout(page) {
  return <FixedContentLayout title="select-Seat">{page}</FixedContentLayout>
}
