import React from 'react';
import Modal from 'react-modal';
import Dropzone from 'react-dropzone';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '30%'
  }
};

class CreateProblemModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: true,
      name: '',
      description: '',
      dropzoneView: true
    };
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false });
    this.props.closeMainModal();
  }

  render(){
    return(
      <div>
        <Modal
          isOpen={this.state.modalOpen}
          onAfterOpen={this.afterOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          ariaHideApp={false}
          contentLabel="Create a Problem"
        >
          <div>
            <h2>this.subtitle here?</h2>
            <button style={{marginLeft: "90%"}} onClick={this.closeModal}>X</button>
            <div>
              <form onSubmit={this.handleSubmit}>
                <h1>H1 Create a Problem</h1>
                <div>
                  <input
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })}
                    type="text"
                    placeholder="Title of Your Problem"
                  />
                  <input
                    value={this.state.description}
                    onChange={e => this.setState({ description: e.target.value })}
                    type="text"
                    placeholder="Enter a Description of Your Problem"
                  />
                  <div>
                    {
                    this.state.dropzoneView ?
                    <div>
                      <Dropzone
                        multiple={false}
                        accept="image/*"
                        onDrop={this.onImageDrop}
                        style={{border: "dashed"}}
                      >
                        <p>Drop an image or click a file to upload</p>
                      </Dropzone>
                    </div> : 
                    <div>
                      <p>File has been submitted. Thank you</p>
                    </div>
                    }
                  </div>
                  <button onClick={this.handleSubmit}>Submit your Problem</button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default CreateProblemModal;