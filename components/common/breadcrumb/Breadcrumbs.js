import Link from 'next/link'

export default function Breadcrumbs({ breadcrumbs }) {
  return (
    <>
      <div className="music-container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            {breadcrumbs.map((breadItem, index) => {
              if (index === breadcrumbs.length - 1) {
                return (
                  <li
                    key={index}
                    className="breadcrumb-item active"
                    aria-current="page"
                  >
                    {breadItem.label}
                  </li>
                )
              } else {
                return (
                  <li key={index} className="breadcrumb-item">
                    <Link style={{ color: '#958cea' }} href={breadItem.href}>
                      {breadItem.label}
                    </Link>
                  </li>
                )
              }
            })}
          </ol>
        </nav>
      </div>
    </>
  )
}
