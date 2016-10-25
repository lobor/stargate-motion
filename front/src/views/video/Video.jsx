import Loading from 'components/loading/Loading';
import MediaVideo from './../../components/media/video.jsx';

class Video extends React.Component {
	constructor(...args){
		super(...args);

		this.state = {
			webcam:[],
			render: false,
		};
	}

	componentDidMount(){
		this.context.io.run('motion:get', {}, (data) => {
			this.setState({webcam: data, render: true});
		})
	}

	render() {
		var html = '';
		if(this.state.webcam.length){
			html = [];
			this.state.webcam.forEach((el, i) => {
				html.push(<MediaVideo key={i} port={el.stream_port} />);
			})
		}
		else{
			html = Lang.motion.noWebcam;
		}

    return (
      <Loading render={this.state.render}>
				{html}
      </Loading>
    )
	}
}
Video.contextTypes = {
	io: React.PropTypes.object
};
export default Video;
