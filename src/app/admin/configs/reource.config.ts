import { FieldType, Resource } from "../models/resource.model";

export const ressources: { [resourceType: string]: { resource: Resource } } = {
  users: {
    resource: {
      model: "User",
      options: {
        parent: { label: "Utilisateurs", icon: "People" },
        properties: {
          showProperties: [
            {
              label: "Nom d'utilisateur",
              name: "username",
              type: FieldType.TEXT,
              required: true,
              minLength: 5,
              placeholder: "Entrez le nom d'utilisateur",
              tooltip: "Nom d'utilisateur unique",
              errorMessage: "Le nom d'utilisateur est requis et doit comporter au moins 5 caractères."
            },
            {
              label: "Email",
              name: "email",
              type: FieldType.EMAIL,
              required: true,
              placeholder: "Entrez l'email",
              tooltip: "Adresse email valide",
              errorMessage: "L'email est requis et doit être valide."
            },
            {
              label: "Prénom",
              name: "first_name",
              type: FieldType.TEXT,
              placeholder: "Entrez le prénom",
              tooltip: "Prénom"
            },
            {
              label: "Nom de famille",
              name: "last_name",
              type: FieldType.TEXT,
              placeholder: "Entrez le nom de famille",
              tooltip: "Nom de famille"
            },
            {
              label: "Téléphone",
              name: "phone",
              type: FieldType.TEL,
              pattern: "^\\+?[1-9][0-9]{1,14}$",
              tooltip: "Numéro de téléphone valide",
              errorMessage: "Le numéro de téléphone doit être valide et respecter le format international."
            }
          ],
          listProperties: [
            { label: "Identifiant", name: "_id", type: FieldType.TEXT, disabled: true },
            { label: "Nom d'utilisateur", name: "username", type: FieldType.TEXT },
            { label: "Email", name: "email", type: FieldType.EMAIL },
            { label: "Prénom", name: "first_name", type: FieldType.TEXT },
            { label: "Nom de famille", name: "last_name", type: FieldType.TEXT },
            { label: "Téléphone", name: "phone", type: FieldType.TEL },
            { label: "Date d'inscription", name: "created_at", type: FieldType.DATE },
            { label: "Date de mise à jour", name: "updated_at", type: FieldType.DATE }
          ],
          filterProperties: [
            { label: "Nom d'utilisateur", name: "username", type: FieldType.TEXT },
            { label: "Email", name: "email", type: FieldType.EMAIL },
            { label: "Date d'inscription", name: "created_at", type: FieldType.DATE }
          ],
          editProperties: [
            {
              label: "Nom d'utilisateur",
              name: "username",
              type: FieldType.TEXT,
              required: true,
              minLength: 5,
              tooltip: "Nom d'utilisateur unique",
              errorMessage: "Le nom d'utilisateur est requis et doit comporter au moins 5 caractères."
            },
            {
              label: "Email",
              name: "email",
              type: FieldType.EMAIL,
              required: true,
              tooltip: "Adresse email valide",
              errorMessage: "L'email est requis et doit être valide."
            },
            {
              label: "Mot de passe",
              name: "password",
              type: FieldType.PASSWORD,
              required: true,
              minLength: 8,
              maxLength: 20,
              tooltip: "Mot de passe sécurisé",
              errorMessage: "Le mot de passe doit comporter entre 8 et 20 caractères."
            },
            {
              label: "Confirmer le mot de passe",
              name: "confirm_password",
              type: FieldType.PASSWORD,
              required: true,
              minLength: 8,
              maxLength: 20,
              tooltip: "Confirmation du mot de passe",
              errorMessage: "Ce mot de passe ne correspond pas au mot de passe saisi ci-dessus."
            },
            {
              label: "Prénom",
              name: "first_name",
              type: FieldType.TEXT
            },
            {
              label: "Nom de famille",
              name: "last_name",
              type: FieldType.TEXT
            },
            {
              label: "Téléphone",
              name: "phone",
              type: FieldType.TEL,
              pattern: "^\\+?[1-9][0-9]{1,14}$",
              tooltip: "Numéro de téléphone valide",
              errorMessage: "Le numéro de téléphone doit être valide et respecter le format international."
            }
          ]
        }
      }
    }
  },

  offers: {
    resource: {
      model: "Offer",
      options: {
        parent: { label: "Offres", icon: "Work" },
        properties: {
          showProperties: [
            {
              label: "Titre de l'offre",
              name: "title",
              type: FieldType.TEXT,
              required: true,
              placeholder: "Entrez le titre de l'offre",
              tooltip: "Titre descriptif de l'offre",
              errorMessage: "Le titre de l'offre est requis."
            },
            {
              label: "Entreprise",
              name: "enterprise",
              type: FieldType.TEXT,
              required: true,
              placeholder: "Entrez le nom de l'entreprise",
              tooltip: "Nom de l'entreprise liée à cette offre",
              errorMessage: "Le nom de l'entreprise est requis."
            },
            {
              label: "Description",
              name: "description",
              type: FieldType.TEXTAREA,
              required: true,
              placeholder: "Décrivez les détails de l'offre",
              tooltip: "Description complète de l'offre",
              errorMessage: "La description de l'offre est requise."
            },
            {
                label: "Type de contrat",
                name: "contract_type",
                type: FieldType.SELECT,
                options: [
                  { value: "Full-Time", label: "Full-Time" },
                  { value: "Part-Time", label: "Part-Time" },
                  { value: "Internship", label: "Internship" },
                  { value: "Freelance", label: "Freelance" },
                  { value: "Temporary", label: "Temporary" }
                ],
                required: true,
                tooltip: "Sélectionnez le type de contrat pour cette offre.",
                errorMessage: "Le type de contrat est requis."
            },
              
            {
              label: "Salaire",
              name: "salary",
              type: FieldType.NUMBER,
              placeholder: "Entrez le salaire proposé",
              tooltip: "Montant du salaire proposé pour cette offre."
            },
            {
              label: "Date de publication",
              name: "posted_date",
              type: FieldType.DATE,
              required: true,
              tooltip: "Date à laquelle l'offre a été publiée."
            },
            {
                label: "Statut",
                name: "status",
                type: FieldType.SELECT,
                options: [
                  { value: "Open", label: "Open" },
                  { value: "Closed", label: "Closed" },
                  { value: "Pending", label: "Pending" }
                ],
                required: true,
                tooltip: "Statut actuel de l'offre."
              }
          ],
          listProperties: [
            { label: "Identifiant", name: "id", type: FieldType.TEXT, disabled: true },
            { label: "Titre", name: "title", type: FieldType.TEXT },
            { label: "Entreprise", name: "enterprise", type: FieldType.TEXT },
            { label: "Type de contrat", name: "contract_type", type: FieldType.TEXT },
            { label: "Statut", name: "status", type: FieldType.TEXT },
            { label: "Date de publication", name: "posted_date", type: FieldType.DATE }
          ],
          filterProperties: [
            { label: "Titre", name: "title", type: FieldType.TEXT },
            { label: "Entreprise", name: "enterprise", type: FieldType.TEXT },
            {
                label: "Statut",
                name: "status",
                type: FieldType.SELECT,
                options: [
                  { value: "Open", label: "Open" },
                  { value: "Closed", label: "Closed" },
                  { value: "Pending", label: "Pending" }
                ]
              }          
            ],
          editProperties: [
            {
              label: "Titre de l'offre",
              name: "title",
              type: FieldType.TEXT,
              required: true,
              tooltip: 'Titre descriptif de l\'offre.',
              errorMessage: 'Le titre de l\'offre est requis.' 
            },
            { 
                label: 'Description', 
                name: 'description', 
                type: FieldType.TEXTAREA, 
                required: true, 
                tooltip: 'Description complète de l\'offre.' 
            },
            {
                label: "Type de contrat",
                name: "contract_type",
                type: FieldType.SELECT,
                options: [
                  { value: "Full-Time", label: "Full-Time" },
                  { value: "Part-Time", label: "Part-Time" },
                  { value: "Internship", label: "Internship" },
                  { value: "Freelance", label: "Freelance" },
                  { value: "Temporary", label: "Temporary" }
                ],
                required: true,
                tooltip: "Sélectionnez le type de contrat pour cette offre.",
                errorMessage: "Le type de contrat est requis."
              },
              
            { 
                label: 'Statut', 
                name: 'status', 
                type: FieldType.SELECT, 
                options: [
                    { value: "Open", label: "Open" },
                    { value: "Closed", label: "Closed" },
                    { value: "Pending", label: "Pending" }
                  ],
                required: true, 
                tooltip: 'Statut actuel de l\'offre.' 
            },
            ],
        },
        },
    },
    },
};

