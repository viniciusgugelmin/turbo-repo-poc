import { S } from "./styles"

export const Button = (props) => {
  const { link = null } = props

  if (link) return (
    <a href={link} style={{ textDecoration: "none" }}>
      <S.Button {...props} />
    </a>
  )

  return <S.Button {...props} />
}
