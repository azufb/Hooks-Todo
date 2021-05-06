import moment from "moment";
import 'moment/locale/ja';

const TitleArea = () => {
    moment.locale('ja');
    const result = moment().format('YYYY年MM月DD日(dd)');

    return (
        <div>
            <h1 className="text-center py-3 fw-bold">今日のやること！</h1>
            <h3 className="py-3">{result}のやること</h3>
        </div>
    )
}

export default TitleArea;