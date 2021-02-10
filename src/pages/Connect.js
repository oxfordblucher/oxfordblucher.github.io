import React, { Component } from 'react';

class Connect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sender: '',
            message: '',
            time: ''
        }
    }

    render() {
        return <form className="col-md-9 mx-auto">
            <section className="form-group">
                <label for="contactName">Name</label>
                <input type="text" className="form-control" id="contactName" placeholder="Your full name" />
            </section>
            <section className="form-group">
                <label for="contactEmail">Email</label>
                <input type="email" className="form-control" id="contactEmail" placeholder="Email address" />
            </section>
            <section className="form-group">
                <label for="writeSubj">Subject</label>
                <input type="text" className="form-control" id="writeSubj" placeholder="Topic of discussion" />
            </section>
            <section className="form-group">
                <label for="writeMsg">Your message</label>
                <textarea className="form-control" id="writeMsg" placeholder="Your message here..."></textarea>
            </section>
            <button type="submit" className="btn btn-primary mb-2">Send</button>
        </form>
    }
}

export default Connect;