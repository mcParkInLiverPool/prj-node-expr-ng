(function(){
    'use strict';

    angular
        .module('todoApp')
        .service('ProjectService', ProjectService)  // factory로 하려면 객체리턴해야되니까 생성해줘야한다.
                                                    // factory('ProjectService', Projectactory)

    function ProjectService($http){

        this.getAllProjects = getAllProjects;
        this.getTodosByProjectId = getTodosByProjectId;
        this.getProject = getProject;

        function getAllProjects(){
            return $http.get('projects')
                .then(function (result) {
                    return result.data;
                })
        }

        function getProject(id) {
            return $http.get('projects/'+id)
                .then(function (result) {
                    return result.data;
                })
        }
        function getTodosByProjectId(projectId) {
            return $http.get('projects/'+projectId+'/todos')
                .then(function (result) {
                    return result.data;
                })
        }
    }

}());
