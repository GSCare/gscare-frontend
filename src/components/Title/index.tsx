import { Container,Content } from './styled';
import Button from '../Button';


interface IProps{
  title: String;
  description?: String;
  textButton?: String;
  typeButton?: "withBorder"|"withBg"
}
function Title({title,description,textButton,typeButton='withBg'}: IProps) {
  return (
    <Container>
      <Content>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
        {textButton && <Button textButton={textButton} typeButton={typeButton}/>}
      </Content>
    </Container>
  )
}
export default Title