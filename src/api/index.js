import Request from '../utils/interceptor';

export function GetResourceList(EventId) {
    return Request({
        "Action": "GetResourceList",
        "EventId": EventId
    })
}

export function GetPlayList(ResourceId) {
    return Request({
        "Action": "GetPlayList",
        "ResourceId": ResourceId
    })
}

export function GetResourceInfo(ResourceId) {
    return Request({
        "Action": "GetResourceInfo",
        "ResourceId": ResourceId
    })
}


