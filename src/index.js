import { h, Component } from 'preact'; // eslint-disable-line no-unused-vars

const Placeholder = () => null;
// const RENDER_TIMEOUT = 0;

export default class NoSir extends Component {
  constructor (props) {
    super(props)
    this.state = { skip: ('skip' in props) ? props.skip : true } // no sir!
  }
  componentDidMount () {
    if (this.state.skip) {
      // this._timeout = setTimeout(
      //   () => this.setState({ skip: false }),
      //   this.props.timeout || RENDER_TIMEOUT
      // );
      this.setState({ skip: false });
    }
  }
  // componentWillUnmount () {
  //   if (this._timeout) {
  //     clearTimeout(this._timeout);
  //   }
  // }
  render () {
    const { children, placeholder = <Placeholder /> } = this.props;
    const { skip } = this.state;
    return skip ? placeholder : children[0];
  }
}

/*
  <NoSir
    placeholder={<MySpinnerOrPlaceholder />} // placeholder to render on server, defaults to null
    skip={false} // toggle on/off server render visibleping, defaults to true, omit prop if true
		abtf // todo, automatically renders when visible in viewport as opposed to always when on client
  >
    <div>Stuff that won't render on server</div>
  </NoSir>
*/
