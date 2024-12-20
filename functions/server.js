const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// Load the in-memory database
const data = {
  nodes: [
    { "id": 1,"type": "circle", "data": { "label": "egress" }, "color": "#6846C3" },
    { "id": 2,"type": "circle", "data": { "label": "node-1" }, "color": "#6846C3" },
    { "id": 3,"type": "circle", "data": { "label": "shy-morning" }, "color": "#6846C3" },
    { "id": 4,"type": "circle", "data": { "label": "patient-sunset" }, "color": "#6846C3" },
    { "id": 5,"type": "circle", "data": { "label": "hidden-water" }, "color": "#6846C3" },
    { "id": 6,"type": "circle", "data": { "label": "hidden-brook" }, "color": "#6846C3" },
    { "id": 7,"type": "circle", "data": { "label": "green-sky" }, "color": "#6846C3" },
    { "id": 8,"type": "circle", "data": { "label": "empty-frog" }, "color": "#6846C3" },
    { "id": 9,"type": "circle", "data": { "label": "broken-moon" }, "color": "#6846C3" },
    { "id": 10,"type": "circle", "data": { "label": "aged-pond" }, "color": "#6846C3" },
    { "id": 11,"type": "circle", "data": { "label": "10.104.0.0/20" }, "color": "#739B3C" },
    { "id": 12,"type": "circle", "data": { "label": "egress-iptables" }, "color": "#6846C3" },
    { "id": 13,"type": "circle", "data": { "label": "test-server" }, "color": "#6846C3" },
    { "id": 14,"type": "circle", "data": { "label": "" }, "color": "#739B3C" }
  ],
  edges: [
    { "source": 3, "target": 1, "color": "#6846C3", "animated": true , "markerEnd": "url(#arrowhead)"},
    { "source": 4, "target": 1, "color": "#6846C3", "animated": true , "markerEnd": "url(#arrowhead)"},
    { "source": 5, "target": 1, "color": "#6846C3" , "animated": true, "markerEnd": "url(#arrowhead)"},
    { "source": 6, "target": 1, "color": "#6846C3", "animated": true , "markerEnd": "url(#arrowhead)"},
    { "source": 7, "target": 1, "color": "#6846C3", "animated": true , "markerEnd": "url(#arrowhead)"},
    { "source": 8, "target": 1, "color": "#6846C3", "animated": true , "markerEnd": "url(#arrowhead)"},
    { "source": 9, "target": 1, "color": "#6846C3" , "animated": true, "markerEnd": "url(#arrowhead)"},
    { "source": 10, "target": 1, "color": "#6846C3", "animated": true , "markerEnd": "url(#arrowhead)"},
    { "source": 1, "target": 11, "color": "#739B3C", "animated": true , "markerEnd": "url(#arrowhead)"},
    { "source": 1, "target": 12, "color": "#888788", "animated": true , "markerEnd": "url(#arrowhead)"},
    { "source": 1, "target": 13, "color": "#888788", "animated": true , "markerEnd": "url(#arrowhead)"},
    { "source": 1, "target": 2, "color": "#888788", "animated": true , "markerEnd": "url(#arrowhead)"},
    { "source": 12, "target": 2, "color": "#888788", "animated": true , "markerEnd": "url(#arrowhead)"},
    { "source": 13, "target": 2, "color": "#888788", "animated": true , "markerEnd": "url(#arrowhead)"},
    { "source": 13, "target": 12, "color": "#888788", "animated": true , "markerEnd": "url(#arrowhead)"},
    { "source": 13, "target": 14, "color": "#739B3C", "animated": true , "markerEnd": "url(#arrowhead)"}
  ],
};

const router = jsonServer.router(data);

server.use(middlewares);
server.use(router);

// Export a handler for Netlify
const serverless = require("serverless-http");
module.exports.handler = serverless(server);
