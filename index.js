class Heading extends React.Component {
    render() {
        const { titleElement, clName} = this.props;
        return React.createElement('h1', {
            title: titleElement,
            className: clName
            }, 'Hello World!')
    }
}


const container = document.getElementById('root')

const element = React.createElement(Heading, { titleElement: 'title for h2', clName: 'heading' })

ReactDOM.render(element, container)