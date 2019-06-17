import request from '@/utils/request';
export const port = {

}

export const showType = (type, title) => {
    if (title === 'overtime') {
        switch (type) {
            case 1:
                return "双休日加班";
            case 2:
                return "节假日加班";
            case 3:
                return "节假日调休";
            default:
                return;
        }
    } else {
        switch (type) {
            case 1:
                return "年假";
            case 2:
                return "调休";
            default:
                return;
        }
    }
}


export const showTime = () => {
    const start_time = new Date().toLocaleDateString();
    console.log(start_time);
}