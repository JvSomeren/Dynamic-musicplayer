function onClientLoad() {
	gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

function onYouTubeApiLoad() {
	gapi.client.setApiKey('AIzaSyDVG6RZOn-SdxCuJ6tNUl5Ofv_HNsyMtns');
}

function search(searchRequest) {
	var request = gapi.client.youtube.search.list({
		part: 'snippet',
		type: 'video',
		q: searchRequest
	});
	
	request.execute(onSearchResponse);
}

function onSearchResponse(response) {
		var scope = angular.element($("#searchContainer")).scope();
		
		scope.$apply(function() {
			scope.searchResults = response;
			scope.makeSearchAnArray();
			console.log(scope.results);
		});
}

/*
{
  "kind": "youtube#searchListResponse",
  "etag": "\"dhbhlDw5j8dK10GxeV_UG6RSReM/BYGwaNpSX8Ru37de2oGp-eeCD8I\"",
  "nextPageToken": "CAUQAA",
  "pageInfo": {
    "totalResults": 60,
    "resultsPerPage": 5
  },
  "items": [
    {
      "kind": "youtube#searchResult",
      "etag": "\"dhbhlDw5j8dK10GxeV_UG6RSReM/hCIR2-vClR2PhrEFi2qsj5Qqsb0\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "u9jtpKYwb_k"
      },
      "snippet": {
        "publishedAt": "2014-04-18T11:18:26.000Z",
        "channelId": "UCyvwEzd3eM4NYlrHYpS5HnQ",
        "title": "EL CID 1996   Het Leids Kwartiertje   01 Het EL CID gevoel",
        "description": "Het eerste nummer op de eerste CD van EL CID, tevens het bekendste nummer van alle EL CID-liedjes!",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/u9jtpKYwb_k/default.jpg"
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/u9jtpKYwb_k/mqdefault.jpg"
          },
          "high": {
            "url": "https://i.ytimg.com/vi/u9jtpKYwb_k/hqdefault.jpg"
          }
        },
        "channelTitle": "",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"dhbhlDw5j8dK10GxeV_UG6RSReM/Wxe0_eDHJJT0VyBVSfbKv-r6_zU\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "Fcytl7oYuI8"
      },
      "snippet": {
        "publishedAt": "2012-08-16T08:45:51.000Z",
        "channelId": "UCppUtIgHSKlrZfDifB8lFsg",
        "title": "Het EL CID gevoel",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Fcytl7oYuI8/default.jpg"
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Fcytl7oYuI8/mqdefault.jpg"
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Fcytl7oYuI8/hqdefault.jpg"
          }
        },
        "channelTitle": "JoeriVeen",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"dhbhlDw5j8dK10GxeV_UG6RSReM/6NBuyNVdF8wFhNr_iVlv9ZzNqvM\"",
      "id": {
        "kind": "youtube#channel",
        "channelId": "UCyvwEzd3eM4NYlrHYpS5HnQ"
      },
      "snippet": {
        "publishedAt": "2013-04-16T10:56:04.000Z",
        "channelId": "UCyvwEzd3eM4NYlrHYpS5HnQ",
        "title": "EL CID",
        "description": "Op dit kanaal staan allemaal EL CID-liedjes. Liedjes dus, die iets te maken hebben met de introductietijd voor nieuwe studenten van de Universiteit Leiden.",
        "thumbnails": {
          "default": {
            "url": "https://lh5.googleusercontent.com/-lvGZuBP0Kq8/AAAAAAAAAAI/AAAAAAAAAAA/aICYXe9PftE/photo.jpg"
          },
          "medium": {
            "url": "https://lh5.googleusercontent.com/-lvGZuBP0Kq8/AAAAAAAAAAI/AAAAAAAAAAA/aICYXe9PftE/photo.jpg"
          },
          "high": {
            "url": "https://lh5.googleusercontent.com/-lvGZuBP0Kq8/AAAAAAAAAAI/AAAAAAAAAAA/aICYXe9PftE/photo.jpg"
          }
        },
        "channelTitle": "",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"dhbhlDw5j8dK10GxeV_UG6RSReM/aX_LpLR6-M4A40CyDmMwa5Lk3jY\"",
      "id": {
        "kind": "youtube#playlist",
        "playlistId": "PL_HhbC60S_6O4INwPm9vFqllG9aLd4gnm"
      },
      "snippet": {
        "publishedAt": "2014-01-15T16:01:17.000Z",
        "channelId": "UCQ3DevIxtzMxpWFHemxX0kg",
        "title": "Popular Videos - El Cid",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Fwz0JtEm4JY/default.jpg"
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Fwz0JtEm4JY/mqdefault.jpg"
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Fwz0JtEm4JY/hqdefault.jpg"
          }
        },
        "channelTitle": "",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"dhbhlDw5j8dK10GxeV_UG6RSReM/bta9SzwzTlZH6dC2eESx1MmKmQQ\"",
      "id": {
        "kind": "youtube#channel",
        "channelId": "UCppUtIgHSKlrZfDifB8lFsg"
      },
      "snippet": {
        "publishedAt": "2006-10-21T16:14:57.000Z",
        "channelId": "UCppUtIgHSKlrZfDifB8lFsg",
        "title": "JoeriVeen",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/i/ppUtIgHSKlrZfDifB8lFsg/1.jpg"
          },
          "medium": {
            "url": "https://i.ytimg.com/i/ppUtIgHSKlrZfDifB8lFsg/mq1.jpg"
          },
          "high": {
            "url": "https://i.ytimg.com/i/ppUtIgHSKlrZfDifB8lFsg/hq1.jpg"
          }
        },
        "channelTitle": "JoeriVeen",
        "liveBroadcastContent": "none"
      }
    }
  ],
  "result": {
    "kind": "youtube#searchListResponse",
    "etag": "\"dhbhlDw5j8dK10GxeV_UG6RSReM/BYGwaNpSX8Ru37de2oGp-eeCD8I\"",
    "nextPageToken": "CAUQAA",
    "pageInfo": {
      "totalResults": 60,
      "resultsPerPage": 5
    },
    "items": [
      {
        "kind": "youtube#searchResult",
        "etag": "\"dhbhlDw5j8dK10GxeV_UG6RSReM/hCIR2-vClR2PhrEFi2qsj5Qqsb0\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "u9jtpKYwb_k"
        },
        "snippet": {
          "publishedAt": "2014-04-18T11:18:26.000Z",
          "channelId": "UCyvwEzd3eM4NYlrHYpS5HnQ",
          "title": "EL CID 1996   Het Leids Kwartiertje   01 Het EL CID gevoel",
          "description": "Het eerste nummer op de eerste CD van EL CID, tevens het bekendste nummer van alle EL CID-liedjes!",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/u9jtpKYwb_k/default.jpg"
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/u9jtpKYwb_k/mqdefault.jpg"
            },
            "high": {
              "url": "https://i.ytimg.com/vi/u9jtpKYwb_k/hqdefault.jpg"
            }
          },
          "channelTitle": "",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"dhbhlDw5j8dK10GxeV_UG6RSReM/Wxe0_eDHJJT0VyBVSfbKv-r6_zU\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "Fcytl7oYuI8"
        },
        "snippet": {
          "publishedAt": "2012-08-16T08:45:51.000Z",
          "channelId": "UCppUtIgHSKlrZfDifB8lFsg",
          "title": "Het EL CID gevoel",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Fcytl7oYuI8/default.jpg"
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Fcytl7oYuI8/mqdefault.jpg"
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Fcytl7oYuI8/hqdefault.jpg"
            }
          },
          "channelTitle": "JoeriVeen",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"dhbhlDw5j8dK10GxeV_UG6RSReM/6NBuyNVdF8wFhNr_iVlv9ZzNqvM\"",
        "id": {
          "kind": "youtube#channel",
          "channelId": "UCyvwEzd3eM4NYlrHYpS5HnQ"
        },
        "snippet": {
          "publishedAt": "2013-04-16T10:56:04.000Z",
          "channelId": "UCyvwEzd3eM4NYlrHYpS5HnQ",
          "title": "EL CID",
          "description": "Op dit kanaal staan allemaal EL CID-liedjes. Liedjes dus, die iets te maken hebben met de introductietijd voor nieuwe studenten van de Universiteit Leiden.",
          "thumbnails": {
            "default": {
              "url": "https://lh5.googleusercontent.com/-lvGZuBP0Kq8/AAAAAAAAAAI/AAAAAAAAAAA/aICYXe9PftE/photo.jpg"
            },
            "medium": {
              "url": "https://lh5.googleusercontent.com/-lvGZuBP0Kq8/AAAAAAAAAAI/AAAAAAAAAAA/aICYXe9PftE/photo.jpg"
            },
            "high": {
              "url": "https://lh5.googleusercontent.com/-lvGZuBP0Kq8/AAAAAAAAAAI/AAAAAAAAAAA/aICYXe9PftE/photo.jpg"
            }
          },
          "channelTitle": "",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"dhbhlDw5j8dK10GxeV_UG6RSReM/aX_LpLR6-M4A40CyDmMwa5Lk3jY\"",
        "id": {
          "kind": "youtube#playlist",
          "playlistId": "PL_HhbC60S_6O4INwPm9vFqllG9aLd4gnm"
        },
        "snippet": {
          "publishedAt": "2014-01-15T16:01:17.000Z",
          "channelId": "UCQ3DevIxtzMxpWFHemxX0kg",
          "title": "Popular Videos - El Cid",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Fwz0JtEm4JY/default.jpg"
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Fwz0JtEm4JY/mqdefault.jpg"
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Fwz0JtEm4JY/hqdefault.jpg"
            }
          },
          "channelTitle": "",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"dhbhlDw5j8dK10GxeV_UG6RSReM/bta9SzwzTlZH6dC2eESx1MmKmQQ\"",
        "id": {
          "kind": "youtube#channel",
          "channelId": "UCppUtIgHSKlrZfDifB8lFsg"
        },
        "snippet": {
          "publishedAt": "2006-10-21T16:14:57.000Z",
          "channelId": "UCppUtIgHSKlrZfDifB8lFsg",
          "title": "JoeriVeen",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/i/ppUtIgHSKlrZfDifB8lFsg/1.jpg"
            },
            "medium": {
              "url": "https://i.ytimg.com/i/ppUtIgHSKlrZfDifB8lFsg/mq1.jpg"
            },
            "high": {
              "url": "https://i.ytimg.com/i/ppUtIgHSKlrZfDifB8lFsg/hq1.jpg"
            }
          },
          "channelTitle": "JoeriVeen",
          "liveBroadcastContent": "none"
        }
      }
    ]
  }
}*/