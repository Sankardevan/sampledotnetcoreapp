import React, { Component } from 'react';
import AdminLTE, { Sidebar, Content, Row, Col, Box, Button } from 'adminlte-2-react';
import Modal from 'react-modal';

const { Item } = Sidebar;

class HelloWorld extends Component {
  state = {}

  render() {
    return (<Content title="Client portal" subTitle="Getting started with adminlte-2-react" browserTitle="Client portal">
      <Row>
        <Col xs={6}>
          <Box title="My first box" type="primary" closable collapsable footer={<Button type="danger" text="Danger Button" />}>
          Welcome
          </Box>
        </Col>
        <Col xs={6}>
          <Box title="Another box">
            Content goes here
          </Box>
        </Col>
      </Row>
    </Content>);
  }
};


class PopUp extends React.Component {
    constructor() {
      super();
  
      this.state = { modalOpened: false };
      this.toggleModal = this.toggleModal.bind(this);
    }
  
    toggleModal() {
      this.setState(prevState => ({ modalOpened: !prevState.modalOpened }));
    }
  
    render() {
      const { data } = this.props;
      return (
          <div>
          <Modal
            //className={{ base: [style.base]}}
            //overlayClassName={{ base: [style.overlayBase] }}
            isOpen={this.state.modalOpened}
            onRequestClose={this.toggleModal}
            contentLabel="Modal with"
          >
            <img
              onClick={this.toggleModal}
              src={data.src}
              alt=' displayed in modal'
            />
            <span>{data.description}</span>
          </Modal>
        </div>
      );
    }
  }



class Header extends Component{
    sidebar = [
        <Item key="hello" text="Hello" to="/hello-world" />
      ]
    
      render() {
        return (
          <AdminLTE title={["Hello", "World"]} titleShort={["He", "we"]} theme="blue" sidebar={this.sidebar}>
            <HelloWorld path="/hello-world" />
            <PopUp/>
          </AdminLTE>
         
        );
      }
}

export  default Header