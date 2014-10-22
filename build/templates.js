angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("main/main.html","<div class=\"header\">\n  <h1>My Record Collection</h1>\n</div>\n\n<div class=\"record-list\">\n  <form ng-submit=\"addRecord()\">\n    <input type=\"text\" ng-model=\"artistName\" size=\"30\" placeholder=\"Artist Name\" style=\"height: 35px;\">\n    <input type=\"text\" ng-model=\"albumName\" size=\"30\" placeholder=\"Album Name\" style=\"height: 35px;\">\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Add Record\">\n  </form>\n  <ul>\n      <li ng-repeat=\"records in records\">\n        <h3>{{ records.artistName }} -- {{ records.albumName }}</h3>   \n      </li>\n  </ul>\n</div>\n\n");}]);