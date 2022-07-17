import {
  Row,
  Col,
  Button,
  Container,
  Form,
  InputGroup,
  FormControl,
  Stack
} from 'react-bootstrap';

import { NavHome } from '../src/components/NavHome';

const HomePlayImg = '../src/assets/images/play.svg';

function App() {
  return (
    <>
      <NavHome />
      <Container className='d-flex justify-content-center align-items-center'>
        <Row className='mt-5'>
          <Col>
            <Form>
              <Row style={{ width: '650px' }}>
                <Col sm={7}>
                  <InputGroup>
                    <InputGroup.Text className='bg-transparent border-0 text-secondary'>
                      Vou trabalhar em
                    </InputGroup.Text>
                    <FormControl
                      style={{ borderRadius: '0' }}
                      placeholder='Dê um nome para o seu projeto'
                      className='bg-transparent border-rounded-0 border-0 border-bottom '
                    />
                  </InputGroup>
                </Col>
                <Col sm={5}>
                  <InputGroup>
                    <InputGroup.Text className='bg-transparent border-0 text-secondary'>
                      durante
                    </InputGroup.Text>
                    <Button
                      onClick={() => console.log('-')}
                      className='bg-transparent border-0 text-secondary'
                    >
                      -
                    </Button>
                    <FormControl
                      placeholder='00'
                      className='bg-transparent border-rounded-0  border-0 border-bottom text-center p-1'
                    />
                    <Button
                      onClick={() => console.log('+')}
                      className='bg-transparent border-0 text-secondary'
                    >
                      +
                    </Button>
                    <InputGroup.Text className='bg-transparent border-0 text-secondary'>
                      minutos
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
      <Container className='d-flex justify-content-center align-items-center'>
        <Row className='mt-5' style={{ width: '650px' }}>
          <Stack gap={3} direction={'horizontal'}>
            <Col
              className='text-light fw-bold d-flex justify-content-center align-items-center'
              style={{
                width: '130px',
                height: '200px',
                fontSize: '6rem',
                backgroundColor: '#29292E',
                fontFamily: 'Roboto Mono'
              }}
            >
              0
            </Col>
            <Col
              className='text-light fw-bold d-flex justify-content-center align-items-center'
              style={{
                width: '130px',
                height: '200px',
                fontSize: '6rem',
                backgroundColor: '#29292E',
                fontFamily: 'Roboto Mono'
              }}
            >
              0
            </Col>
            <Col
              className='text-success fw-bold d-flex justify-content-center align-items-center'
              style={{
                width: '130px',
                height: '200px',
                fontSize: '6rem',
                fontFamily: 'Roboto Mono'
              }}
            >
              :
            </Col>
            <Col
              className='text-light d-flex fw-bold justify-content-center align-items-center'
              style={{
                width: '130px',
                height: '200px',
                fontSize: '6rem',
                backgroundColor: '#29292E',
                fontFamily: 'Roboto Mono'
              }}
            >
              0
            </Col>
            <Col
              className='text-light fw-bold d-flex justify-content-center align-items-center'
              style={{
                width: '130px',
                height: '200px',
                fontSize: '6rem',
                backgroundColor: '#29292E',
                fontFamily: 'Roboto Mono'
              }}
            >
              0
            </Col>
          </Stack>
          <Button
            onClick={() => console.log('Começar')}
            className='mt-5'
            variant='success'
            size='lg'
            type='submit'
          >
            <img className='px-2' src={HomePlayImg} /> começar
          </Button>
        </Row>
      </Container>
    </>
  );
}

export { App };
