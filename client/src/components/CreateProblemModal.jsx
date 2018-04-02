import React from 'react';
import Modal from 'react-modal';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import CamShot3 from './CamShot3.jsx';


const customStyles = {
  content: {
    top: '55%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '60%',
  },
};

class CreateProblemModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: true,
      name: '',
      city: '',
      description: '',
      dropzoneView: true,
      cloudinaryUrl: '',
      category: ''
    };
    this.closeModal = this.closeModal.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getFreshPhoto = this.getFreshPhoto.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false });
    this.props.closeMainModal();
  }

  handleDrop(files) {
    const req = request.post('/api/cloudinaryUpload');
    req.attach('problemImage', files[0]);
    req.then((result) => {
      console.log(result);
      this.setState({
        dropzoneView: false,
        cloudinaryUrl: result.body.secure_url,
      });
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.closeModal();
    request
      .post('/listing')
      .send({
        title: this.state.name,
        description: this.state.description,
        image: this.state.cloudinaryUrl,
        city: this.state.city,
        category: this.state.category
      })
      .then(result => console.log(result));
  }

  getFreshPhoto(file) {
    this.handleDrop(file);
  }

  render() {
    return (
      <div >
        <Modal
          isOpen={this.state.modalOpen}
          onAfterOpen={this.afterOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          ariaHideApp={false}
          contentLabel="Create a Problem"
        >
          <div>
            <button
              style={{marginLeft: "98%"}}
              onClick={this.closeModal}
            >
              X
            </button>
            <h2>Create a Problem</h2>
            <CamShot3 getPhoto={this.getFreshPhoto}/>
            <div>
              <form
                onSubmit={this.handleSubmit}
                className="ui form"
              >
                <div>
                  <div className="field">
                    <label>Problem Name</label>
                    <input
                      value={this.state.name}
                      onChange={e => this.setState({ name: e.target.value })}
                      type="text"
                      placeholder="Title of Your Problem"
                    />
                  </div>
                  <div className="field">
                    <label>City</label>
                    <input
                      value={this.state.city}
                      onChange={e => this.setState({ city: e.target.value })}
                      type="text"
                      placeholder="City"
                    />
                  </div>
                  <div className="field">
                    <label>Category</label>
                    <select
                      className="ui search dropdown"
                      value={this.state.category}
                      onChange={e => this.setState({ category: e.target.value })}
                    >
                      <option value="">Select Category</option>
                      <option>Other</option>
                      <option>Speciality</option>
                      <option>Labor</option>
                      <option>Computer</option>
                      <option>Handyman</option>
                      <option>Automotive</option>
                      <option>Electronics</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>Problem Description</label>
                    <textarea
                      value={this.state.description}
                      onChange={e => this.setState({ description: e.target.value })}
                      type="text"
                      placeholder="Enter a Description of Your Problem"
                      rows="2"
                    />
                  </div>
                  <div>
                    {
                    this.state.dropzoneView ?
                    <div>
                      <Dropzone
                        multiple={false}
                        accept="image/*"
                        onDrop={this.handleDrop}
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
                  <a href="https://www.youtube.com/embed/jNSORWnr5ZQ?autoplay=1">click here</a>
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
