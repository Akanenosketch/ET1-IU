def_test = Array(
    //Definición de pruebas para la tabla analysis_preparation
    //  id_analysis_preparation
    Array('analysis_preparation', 'id_analysis_preparation', 1, 'cumple tamaño mínimo', false, 'id_analysis_preparation_min_size_NG', 'El campo id_analysis_preparation debe de contener mínimo 1 dígito'),
    Array('analysis_preparation', 'id_analysis_preparation', 2, 'cumple tamaño máximo', false, 'id_analysis_preparation_max_size_NG', 'El campo id_analysis_preparation debe de contener máximo 11 dígitos'),
    Array('analysis_preparation', 'id_analysis_preparation', 3, 'contiene solo digitos', false, 'id_analysis_preparation_formato_NG', 'El campo id_analysis_preparation sólo puede contener números'),
    Array('analysis_preparation', 'id_analysis_preparation', 4, 'es numérico', true, 'id_analysis_preparation_is_numeric_OK', 'Éxito'),
    //name_analysis_preparation
    Array('analysis_preparation', 'name_analysis_preparation', 5, 'cumple tamaño mínimo', false, 'name_analysis_preparation_nim_size_NG', 'name_analysis_preparation debe de contener como minimo 8 caracteres'),
    Array('analysis_preparation', 'name_analysis_preparation', 6, 'cumple tamaño máximo', false, 'name_analysis_preparation_max_size_NG', 'name_analysis_preparation no debe de superar los 100 caracteres'),
    Array('analysis_preparation', 'name_analysis_preparation', 7, 'no tiene acentos ni ñ', false, 'name_analysis_preparation_format_NG', 'name_analysis_preparation no puede contener acentos, ni ñs ni ningun tipo de simbolo especial'),
    Array('analysis_preparation', 'name_analysis_preparation', 8, 'es alfabético', true, 'name_analysis_preparation_is_alphabetic_OK', 'Exito'),
    //description_analysis_preparation 
    Array('analysis_preparation', 'description_analysis_preparation', 9, 'cumple tamaño mínimo', false, 'description_analysis_min_size_NG', 'description_analysis_preparation debe de tener una longitud minima de 80 caracteres.'),
    Array('analysis_preparation', 'description_analysis_preparation', 10, 'cumple tamaño máximo', false, 'description_analysis_max_size_NG', 'description_analysis_preparation debe de tener una longitud maxima de 5000 caracteres.'),
    Array('analysis_preparation', 'description_analysis_preparation', 11, 'no tiene acentos ni ñ', false, 'description_analysis_format_NG', 'description_analysis_preparation no puede contener acntos ni ñs.'),
    Array('analysis_preparation', 'description_analysis_preparation', 12, 'es alfabético', true, 'description_analysis_is_alphabetic_OK', 'Exito'),
    //bib_analysis_preparation
    Array('analysis_preparation', 'bib_analysis_preparation', 13, 'cumple tamaño mínimo', false, 'bib_analysis_preparation_min_size_NG', 'bib_analysis_preparation debe de tener como minimo 6 caracteres'),
    Array('analysis_preparation', 'bib_analysis_preparation', 14, 'cumple tamaño máximo', false, 'bib_analysis_preparation_max_size_NG', 'bib_analysis_preparation debe de tener como maximo 200 caracteres'),
    Array('analysis_preparation', 'bib_analysis_preparation', 15, 'es alfabético con espacios, acentos, signos de puntuacion o ñ', false, 'bib_analysis_preparation_format_NG', 'El nombre de bib_analysis_preparation no es válido, debe de ser alfabético y puede contener espacios, acentos, la letra ñ y signos de puntuación'),
    Array('analysis_preparation', 'bib_analysis_preparation', 16, 'es alfabético', true, 'bib_analysis_preparation_is_alphabetic_OK', 'Éxito'),
    //file_analysis_preparation
    Array('analysis_preparation', 'file_analysis_preparation', 17, 'cumple tamaño mínimo', false, 'file_analysis_preparation_min_size_NG', 'file_analysis_preparation debe de tener un nombre de minimo 7 caracteres'),
    Array('analysis_preparation', 'file_analysis_preparation', 18, 'cumple tamaño máximo', false, 'file_analysis_preparation_max_size_NG', 'file_analysis_preparation debe de tener un nombre de maximo 100 caracteres'),
    Array('analysis_preparation', 'file_analysis_preparation', 19, 'no contiene ñ, espacios, acentos ni otro tipo de caracteres', false, 'file_analysis_preparation_format_NG', 'file_analysis_format debe de tener un nombre que no contenga espacios, acentos, la letra ñ ni ningun tipo de caracter especial'),
    Array('analysis_prepatation', 'file_analysis_preparation', 20, 'es alfabetico', true, 'file_analysis_preparation_is_alphabetic_OK', 'Exito'),
    //Definición de tests para la entidad project
    //id_project
    Array('project', 'id_project', 21, 'cumple tamaño mínimo', false, 'id_project_min_size_NG', 'id_project debe de tener como minimo 1 digito'),
    Array('project', 'id_project', 22, 'cumple tamaño máximo',false, 'id_project_max_size', 'id_project debe de tener como maximo 11 digitos'),
    Array('project', 'id_project', 23, 'solo contiene digitos', false, 'id_project_format_NG', 'id_project no puede contener letras o simbolos especiales'),
    Array('project', 'id_project', 24, 'es numérico', true, 'id_project_is_numeric_OK', 'Exito'),
    //name_project
    Array('project', 'name_project', 25, 'cumple tamaño mínimo', false, 'name_project_min_size_NG', 'name_project debe de tener como minimo 15 caracteres'),
    Array('project', 'name_project', 26, 'cumple tamaño máximo', false, 'name_project_max_size_NG', 'name_project debe de tener como maximo 100 caracteres'),
    Array('project', 'name_project', 27, 'no tiene acentos ni ñ', false, 'name_project_format_NG', 'name_project no pueden contener acentos ni tener la letra ñ'),
    Array('project', 'name_project', 28, 'es alfabetico', true, 'name_project_is_alphabetic_OK', 'Exito'),
    //start_date_project
    Array('project', 'start_date_project', 29, 'tiene un formato válido', false, 'start_date_project_format_NG', 'start_date_format tiene un fromato incorrecto, debe seguir el siguiente formato dd/mm/aaaa'),
    Array('project', 'start_date_project', 30, 'tiene una fecha válida', false, 'start_date_project_valid_date_NG', 'start_date_project no tiene una fecha válida, por favor revise el calendario e introduzca una fecha válida'),
    Array('project', 'start_date_project', 31, 'es una fecha valida', true, 'start_date_project_is_valid_OK', 'Exito'),
    //end_date_project
    Array('project', 'end_date_project', 32, 'tiene un formato válido', false, 'end_date_project_format_NG', 'end_date_format tiene un fromato incorrecto, debe de seguir el siguiente formato dd/mm/aaaa'),
    Array('project', 'end_date_project', 33, 'tiene una fecha válida', false, 'end_date_project_valid_date_NG', 'end_date_project no tiene una fecha válida, por favor revise el calendario e introduzca una fecha válida'),
    Array('project', 'end_date_project', 34, 'es una fecha valida', true, 'end_date_project_is_valid_OK', 'Exito'),
    //responsable_project
    Array('project', 'responsable_project', 35, 'cumple tamaño mínimo', false, 'responsable_project_min_size_NG', 'reponsable_project debe de contener como minimo 6 caracteres'),
    Array('project', 'responsable_project', 36, 'cumple tamaño máximo', false, 'responable_project_max_size_NG', 'responable_project debe de temer como maximo 60 caracteres'),
    Array('project', 'responsable_project', 37, 'es alfabético con espacios, acentos o ñ', false, 'responsable_project_format_NG', 'El nombre de responsable_project no es válido, debe de ser alfabético y puede contener espacios, acentos, la letra ñ y signos de puntuación'),
    Array('project', 'responsable_project', 38, 'es alfabetico', true, 'responsable_project_is_alphabetic_OK', 'Exito'),
    //organization_project
    Array('project', 'organization_project', 39, 'cumple tamaño mínimo', false, 'organization_project_min_size_NG', 'organization_project debe de contener como minimo 6 caracteres'),
    Array('project', 'organization_project', 40, 'cumple tamaño máximo', false, 'organization_project_max_size_NG', 'organization_project debe de temer como maximo 100 caracteres'),
    Array('project', 'organization_project', 41, 'es alfabético con espacios, acentos o ñ', false, 'organization_project_format_NG', 'El nombre de organization_project no es válido, debe de ser alfabético y puede contener espacios, acentos, la letra ñ y signos de puntuación'),
    Array('project', 'organization_project', 42, 'es alfabetico', true, 'organization_project_is_alphabetic_OK', 'Exito'),
    //description_project
    Array('project', 'description_project', 43, 'cumple tamaño mínimo', false, 'description_project_min_size_NG', 'description_project debe de contener como minimo 30 caracteres'),
    Array('project', 'description_project', 44, 'cumple tamaño máximo', false, 'description_project_max_size_NG', 'description_project debe de temer como maximo 500 caracteres'),
    Array('project', 'description_project', 45, 'todos sus caracteres pertenecen al codigo ascii', false, 'description_project_format_NG', 'description_project no puede tener acentos ni ningún tipo de caracter o símbolo no terteneciente al código ascii'),
    Array('project', 'description_project', 46, 'es alfabetico', true, 'description_project_is_alphabetic_OK', 'Exito'),
    //file_project
    Array('project', 'file_project', 47, 'cumple tamaño mínimo', false, 'file_project_min_size_NG', 'file_project debe de tener un nombre de minimo 7 caracteres'),
    Array('project', 'file_project', 48, 'cumple tamaño máximo', false, 'file_project_max_size_NG', 'file_project debe de tener un nombre de maximo 100 caracteres'),
    Array('project', 'file_project', 49, 'no contiene ñ, espacios, acentos ni otro tipo de caracteres', false, 'file_project_format_NG', 'file_project debe de tener un nombre que no contenga espacios, acentos, la letra ñ ni ningun tipo de caracter especial'),
    Array('project', 'file_project', 50, 'es alfabetico', true, 'file_project_is_alphabetic_OK', 'Exito'),  
    //code_project
    Array('project', 'code_project', 51, 'cumple tamaño mínimo', false, 'code_project_min_size_NG', 'code_project debe de contener como minimo 6 caracteres'),
    Array('project', 'code_project', 52, 'cumple tamaño máximo', false, 'code_project_max_size_NG', 'code_project debe de temer como maximo 60 caracteres'),
    Array('project', 'code_project', 53, 'no tiene acentos', false, 'code_project_format_NG', 'code_project no puede tener acentos'),
    Array('project', 'code_project', 54, 'es alfabetico', true, 'code_project_is_alphabetic_OK', 'Exito'),
    //acronym_project
    Array('project', 'acronym_project', 55, 'cumple tamaño mínimo', false, 'acronym_project_min_size_NG', 'acronym_project debe de contener como minimo 6 caracteres'),
    Array('project', 'acronym_project', 56, 'cumple tamaño máximo', false, 'acronym_project_max_size_NG', 'acronym_project debe de temer como maximo 60 caracteres'),
    Array('project', 'acronym_project', 57, 'no tiene acentos ni espacios', false, 'acronym_project_format_NG', 'acronym_project no puede tener acentos ni espacios'),
    Array('project', 'acronym_project', 58, 'es alfabetico', true, 'acronym_project_is_alphabetic_OK', 'Exito'),
    //id_sampling_methodoly
    Array('project', 'id_sampling_methodology', 59, 'cumple tamaño mínimo', false, 'id_sampling_methodology_min_size_NG', 'id_sampling_methodology debe de tener como minimo 1 digito'),
    Array('project', 'id_sampling_methodology', 60, 'cumple tamaño máximo', false, 'id_sampling_methodology_max_size_NG','id_sampling_methodology debe de tener como maximo 11 digitos'),
    Array('project', 'id_sampling_methodology', 61, 'solo contiene digitos', false, 'id_sampling_methodology_format_NG', 'id_sampling_methodology no puede contener letras o simbolos especiales'),
    Array('project', 'id_sampling_methodology', 62, 'es numérico', true, 'id_sampling_methodology_is_numeric_OK', 'Exito'),
)