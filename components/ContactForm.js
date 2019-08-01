var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },

    render: function () {
        return (
            React.createElement('form', {className: 'contactForm'},

                React.createElement('div', {className: 'data'},

                    React.createElement('p', {className: 'name'}, 'Imię'),
                    React.createElement('p', {className: 'name'}, 'Nazwisko'),
                ),

                React.createElement('div', {className: 'inputs'},
                    React.createElement('input', {type: 'text', placeholder: 'Imię', value: this.props.contact.firstName,}),
                    React.createElement('input', {type: 'text', placeholder: 'Nazwisko', value: this.props.contact.lastName,}),
                ),

                React.createElement('p', {className: 'mail'}, 'Mail'),
                React.createElement('input', {className: 'email', type: 'email', placeholder: 'E-mail', value: this.props.contact.email,}),
                React.createElement('button', {className: 'button', type: 'submit'}, "Dodaj kontakt")
            )
        )
    },
})