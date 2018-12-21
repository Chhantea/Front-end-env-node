import React,{Component} from 'react';
import axios from 'axios';

class QandA extends Component{
    constructor(props){
        super(props);
        this.state = {
            questions: [],
            answers: [],
            // id: this.props.getData.id
        };
    };
    // componentDidMount(){
    //     axios.get('http://localhost:3000/api/user/' + this.state.id)
    //         .then(res =>{
    //             this.setState({questions: res.data.secret_questions});
    //             this.setState({answers: res.data.secret_answers});
    //         })
    // }
    render(){
        // console.log(this.state);
        return(
            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><p>Etsy
                mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro
                fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer,
                iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy
                irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free,
                carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably
                haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth
                chambray yr.</p>
            </div>
        )
    }
}
export default QandA;