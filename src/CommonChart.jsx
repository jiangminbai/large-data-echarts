import { Button } from "antd";
function CommonChart (props) {
  const {
    refresh,
    children,
  } = props

  return (
    <div className="graph">
      <Button type="primary" onClick={refresh}>刷新</Button>
      {children}
    </div>
  )
}

export default CommonChart