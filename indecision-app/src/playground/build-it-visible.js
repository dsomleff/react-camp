class VisibilityToggle extends React.Component{
  /**
	 * @param {default} props
	 */
  constructor(props) {
    super(props);
    this.state = {
      body: 'Hello there!!! Now you see me!',
      show: false
    };
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
  }

  /**
   * Button Handler
   * @returns obj
   */
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        show: !prevState.show
      }
    });
  }

  /**
	 * Component Usage
	 * @returns html
	 */
  render() {
    return (
      <div>
      <h1>Visibility Toggle</h1>
      <button onClick={ this.handleToggleVisibility }>
        { this.state.show ? 'Hide details' : 'Show details' }
      </button>
      {
        this.state.show && (
          <div>
            <p>{ this.state.body }</p>
          </div>
        )
      }
    </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
