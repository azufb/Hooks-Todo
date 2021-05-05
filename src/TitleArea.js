import moment from "moment";
import 'moment/locale/ja'

const TitleArea = () => {
    const location = moment.locale('ja');
    const result = moment().format('YYYY年MM月DD日(dd)');

    return (
        <h1>
            {result}のタスク一覧
        </h1>
    )
}

export default TitleArea;