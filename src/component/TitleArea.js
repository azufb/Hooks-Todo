import moment from "moment";
import 'moment/locale/ja';

const TitleArea = () => {
    moment.locale('ja');
    const result = moment().format('YYYY年MM月DD日(dd)');

    return (
        <h1>
            {result}のやること
        </h1>
    )
}

export default TitleArea;