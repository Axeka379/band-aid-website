import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/f/myybvyqq"
          method="POST"
          id ="contactForm"
        >

          
          <div className="row">

          <div className="col-md-6">
            <div className="form-group">
              <input
                name="email"
                type="email"
                id="email"
                className="form-control"
                placeholder="Email"
                required="required"
              />
              <p className="help-block text-danger"></p>
            </div>
          </div>
          </div>

          <div className="form-group">
            <textarea
              name="message"
              id="message"
              className="form-control"
              rows="4"
              placeholder="Message"
              required
            ></textarea>
            <p className="help-block text-danger"></p>
          </div>


          {status === "SUCCESS" ? <h1>Thank you!</h1> : <button type="submit" className="btn btn-custom btn-lg">
            Send Message
        </button>}
          {status === "ERROR" && <h1>Something went wrong...</h1>}
        </form>
     

      
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}