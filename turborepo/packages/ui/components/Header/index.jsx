import { S } from './styles'

const Header = (props) => {
  const { title = null } = props

  return (
    <S.Header {...props}>
      {title && <h1>{title}</h1>}
      {props.children}
    </S.Header>
  )
}

export { Header }
