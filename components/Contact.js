var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function () {
        return (
            React.createElement('div', {className: 'contactItem'},
            React.createElement('img', {
                className: 'contactImage',
                src: 'https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png'
            }),
                React.createElement('p', {className: 'contactData'}, 'Imię: ' + this.props.item.firstName),
                React.createElement('p', {className: 'contactData'}, 'Nazwisko: ' + this.props.item.lastName),
                React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email},this.props.item.email)
            )
        )
    },
});