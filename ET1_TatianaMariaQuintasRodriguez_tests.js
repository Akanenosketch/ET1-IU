def_test=Array(
    //Definición de pruebas para la tabla analysis_preparation
    //  id_analysis_preparation
    Array(
        'analysis_preparation',
        'id_analysis_preparation', 
        1, 
        'cumple_tamaño_nimino', 
        false, 
        'id_analisys_preparation_min_size_NG'
        , 'El campo id_analysis_preparation debe de contener mínimo 1 dígito'
    ),
    Array(
        'analysis_preparation',
        'id_analysis_preparation', 
        2, 
        'cumple_tamaño_maximo', 
        false, 
        'id_analisys_preparation_max_size_NG'
        , 'El campo id_analysis_preparation debe de contener máximo 11 dígitos'
    ),
    Array(
        'analysis_preparation',
        'id_analysis_preparation', 
        3, 
        'contiene_solo_digitos', 
        false, 
        'id_analisys_preparation_formato_NG'
        , 'El campo id_analysis_preparation sólo puede contener números'
    ),
    Array(
        'analysis_preparation',
        'id_analysis_preparation', 
        4, 
        'contiene_solo_digitos', 
        true, 
        'id_analisys_preparation_OK'
        , 'Éxito'
    ),
    //  name_analysis_preparation REVISAR
    Array(
        Array(
            'analysis_preparation', 
            'name_analysis_preparation',
            5,
            'cumple_tamaño_minimo',
            false,
            'name_analysis_preparation_nim_size_NG',
            'name_analysis_preparation debe de contener como minimo 8 caracteres'
        ),
        Array(
            'analysis_preparation',
            'name_analysis_preparation',
            6,
            'cumple_tamaño_maximo',
            false,
            'name_analysis_preparation_max_size_NG',
            'name_analysis_preparation no debe de superar los 100 caracteres'
        ),
        Array(
            'analysis_prepraration',
            'name_analysis_prepraration',
            7,
            'no es una cadena en blanco en blanco',
            falso,
            'name_analysis_prepraration_is_blank',
            'name_analysys_preparation no puede contener solo espacios, por favor ponle un valor que se pueda leer'
        ),
        Array(
            'analysis_preparation',
            'name_analysis_preparation',
            8,
            'no tiene acentos, ñ ni simbolos especiales',
            false,
            'name_analysis_preparation_format_NG',
            'name_analysis_preparation no puede contener acentos, ni ñs ni ningun tipo de simbolo especial'
        ),
        Array(
            'analysis_preparation',
            'name_analysis_preparation',
            9,
            'es alfabético',
            true,
            'name_analysis_preparation_OK',
            'Exito' 
        ),
        //description_analysis_preparation REVISAR
        Array(
            'analysis_preparation',
            'description_analysis_prepraration',
            10,
            'sumple tamaño minimo',
            false,
            'description_analysis_min_size_NG',
            'description_analysis_preparation debe de tener una longitud minima de 80 caracteres.'
        ),
        Array(
            'analysis_preparation',
            'description_analysis_prepraration',
            11,
            'sumple tamaño maximo',
            false,
            'description_analysis_max_size_NG',
            'description_analysis_preparation debe de tener una longitud maxima de 5000 caracteres.'
        ),
        Array(
            'analysis_preparation',
            'description_analysis_prepraration',
            12,
            'No está en blanco (lleno de espacios)',
            false,
            'description_analysis_prepraration_is_blank',
            'description_analysys_preparation no puede contener solo espacios, por favor ponle un valor que se pueda leer'
        ),
        Array(
            'analysis_preparation',
            'description_analysis_prepraration',
            13,
            'no tiene acentos ni ñ',
            false,
            'description_analysis_format_NG',
            'description_analysis_preparation no puede contener acntos ni ñs.'
        ),
        Array(
            'analysis_preparation',
            'description_analysis_prepraration',
            14,
            'es alfabético',
            false,
            'description_analysis_min_OK',
            'Exito'
        ),
        //bib_analysis_preparation
        Array(
            'analysis_preparation',
            'bib_analysis_preparation',
            15,
            'cumple tamaño minimo',
            false,
            'bib_analysis_preparation_min_size_NG',
            'bib_analysis_preparation debe de tener como minimo 6 caracteres'

        ),
        Array(
            'analysis_preparation',
            'bib_analysis_preparation',
            16,
            'cumple tamaño maximo',
            false,
            'bib_analysis_preparation_max_size_NG',
            'bib_analysis_preparation debe de tener como maximo 200 caracteres'
        ),
        Array(
            'analysis_preparation',
            'bib_anaysis_preparation',
            17,
            'No está en blanco (sólo espacios)',
            false,
            'bib_analysis_prepraration_is_blank',
            'bib_analysis_prepraration no puede contener solo espacios, por favos ponle un valor que se pueda leer'
        ),
        Array(
            'analysis_preparation',
            'bib_analysis_preparation',
            18,

        ), 

    )
);