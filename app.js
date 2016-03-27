function repos_agregar(repos, $scope) {
    for (i=0; i<repos.length; i++) {
        console.log();
        $scope.proyectos.push({
            full_name: repos[i].full_name,
            description: repos[i].description,
            language: repos[i].language,
            html_url: repos[i].html_url,
            stargazers_count: repos[i].stargazers_count,
            forks_count: repos[i].forks_count
        });
    }
}

var app = angular.module('portafolio', []).
controller('Controller_Proyectos', function($scope, $http) {
    username = 'estebandelaf';
    $scope.proyectos = [];
    $http.get('https://api.github.com/users/'+username+'/repos').success(function(repos) {
        repos_agregar(repos, $scope);
        $http.get('https://api.github.com/users/'+username+'/orgs').success(function(organizaciones) {
            for (i=0; i<organizaciones.length; i++) {
                $http.get('https://api.github.com/users/'+organizaciones[i].login+'/repos').success(function(repos) {
                    repos_agregar(repos, $scope);
                });
            }
        });
    });
}).
controller('Controller_Capturas', function($scope) {
    $scope.capturas = [
        {
            name: 'LibreDTE',
            desc: 'Facturación electrónica libre',
            date: 2016,
            imag: 'libredte.png',
            link: 'https://libredte.cl'
        },
        {
            name: 'LibreDTE',
            desc: 'Aplicación móvil',
            date: 2016,
            imag: 'libredte-android.png',
            link: 'https://play.google.com/store/apps/details?id=cl.sasco.libredte'
        },
        {
            name: 'Colectron',
            desc: 'Software cobranza y judicial',
            date: 2016,
            imag: 'colectron.png',
            link: 'https://colectron.cl'
        },
        {
            name: 'Campus UNAB',
            desc: 'Gestión de proyectos',
            date: 2016,
            imag: 'campus.png',
            link: 'https://campus.ing.unab.cl'
        },
        {
            name: 'Bind10',
            desc: 'Panel web para bind10',
            date: 2014,
            imag: 'bind10.png',
            link: 'https://bind10.sasco.cl'
        },
        {
            name: 'EasySSL',
            desc: 'Certificados SSL',
            date: 2012,
            imag: 'easyssl.png',
            link: 'https://ca.sasco.cl'
        },
        {
            name: 'Fontano',
            desc: 'Parador Fontano de Unco',
            date: 2013,
            imag: 'fontano.png',
            link: 'http://www.fontano.cl'
        },
        {
            name: 'Serbuk',
            desc: 'Red social servicios',
            date: 2011,
            imag: 'serbuk.png',
            link: 'https://serbuk.sasco.cl'
        },
        {
            name: 'miShell',
            desc: 'Remake versión del 2005',
            date: 2014,
            imag: 'mishell.png',
            link: 'https://github.com/estebandelaf/mishell'
        },
        {
            name: 'MiGaLeRiA',
            desc: 'Remake versión del 2005',
            date: 2011,
            imag: 'galeria.png',
            link: 'http://mi.delaf.cl/migaleria'
        },
        {
            name: 'MiFoToLoG',
            desc: 'Remake versión del 2005',
            date: 2011,
            imag: 'fotolog.png',
            link: 'http://mi.delaf.cl/mifotolog'
        },
        {
            name: 'MiInTrAnEt',
            desc: 'Base para crear una Intranet',
            date: 2010,
            imag: 'miintranet.png',
            link: 'https://github.com/estebandelaf/miintranet'
        },
        {
            name: 'MiAuDiO',
            desc: 'Web para compartir audio',
            date: 2008,
            imag: 'miaudio.png',
            link: 'http://mi.delaf.cl/miaudio'
        },
        {
            name: 'MiCD',
            desc: 'Tiendas ventas CD/DVD',
            date: 2008,
            imag: 'micd.png',
            link: 'http://mi.delaf.cl/micd'
        },
        {
            name: 'MiTeSt',
            desc: 'Aplicación móvil',
            date: 2015,
            imag: 'mitest-android.png',
            link: 'https://play.google.com/store/apps/details?id=cl.mitest.android'
        },
        {
            name: 'MiTeSt',
            desc: 'Aplicación escritorio',
            date: 2009,
            imag: 'mitest-desktop.png',
            link: 'https://github.com/mitestcl/mitest-desktop-2009'
        },
        {
            name: 'MiTeSt',
            desc: 'Aplicación web',
            date: 2012,
            imag: 'mitest.png',
            link: 'https://mitest.cl'
        },
        {
            name: 'Muestra ELO',
            desc: 'Web muestra electrónica',
            date: 2006,
            imag: 'muestraelo.png',
            link: 'http://web.archive.org/web/20060411172523/http://www.elo.utfsm.cl/~muestraelo'
        },
        {
            name: 'OpenNESS',
            desc: 'Escaneo Internet',
            date: 2012,
            imag: 'openness.png',
            link: 'https://openness.sasco.cl'
        },
        {
            name: 'EasyVHosts',
            desc: 'Configuración automágica',
            date: 2012,
            imag: 'easyvhost.png',
            link: 'https://github.com/sascocl/EasyVHosts'
        },
        {
            name: 'Mapa BGP',
            desc: 'Mapa a partir de rutas BGP',
            date: 2014,
            imag: 'bgp_map.png',
            link: 'https://github.com/estebandelaf/network-mapping'
        },
        {
            name: 'ShootMe',
            desc: 'Shooter con formato RPG',
            date: 2011,
            imag: 'ShootMe.png',
            link: 'https://github.com/estebandelaf/ShootMe'
        },
        {
            name: 'Space1986',
            desc: 'Remake versión del 2005',
            date: 2015,
            imag: 'Space1986.png',
            link: 'https://github.com/estebandelaf/Space1986'
        }
    ];
});
