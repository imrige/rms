import iBreadcrumb from "./iBreadcrumb";
import {iDescription, iDescriptionItem} from './iDescription'
import iChartCard from "./iChartCard";
import iGreeting from "./iGreeting";
import {iInformation, iInformationItem} from "./iInformation";
import iLoadingBar from "./iLoadingBar";
import iPageHeader from "./iPageHeader";
import {iRadio, iRadioGroup} from "./iRadio";
import {iRank, iRankItem} from "./iRank";
import iResult from './iResult'
import iTagGroup from "./iTagGroup";
import iToolbar from "./iToolbar";
import {iTrend, iTrendItem} from "./iTrend";

let components = {
    iBreadcrumb,
    iDescription,
    iDescriptionItem,
    iChartCard,
    iGreeting,
    iInformation,
    iInformationItem,
    iLoadingBar,
    iPageHeader,
    iRadio,
    iRadioGroup,
    iRank,
    iRankItem,
    iResult,
    iTagGroup,
    iToolbar,
    iTrend,
    iTrendItem
};

export default {
    install: (Vue) => {
        Object.keys(components).forEach(key => {
            Vue.component(key, components[key]);
        })
    }
}

