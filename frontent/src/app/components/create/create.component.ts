import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';

@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.css'],
	providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {
	public url: string;
	public title: string;
	public project: Project;
	public save_project: any;
	public status: string = '';
	public filesToUpload: Array<File> = [];

	constructor(
		private _projectService: ProjectService,
		private _uploadService: UploadService,
	) {
		this.url = Global.url;
		this.title = "Crear proyecto";
		this.project = new Project('', '', '',0);
	}

	ngOnInit() {
	}

	onSubmit(form: any) {

		// Guardar datos básicos
		this._projectService.saveProject(this.project).subscribe(
			response => {
				this.save_project = response.project;
						this.status = 'success';
						form.reset();
			},
			error => {
				console.log(<any>error);
			}
		);
	}

	fileChangeEvent(fileInput: any) {
		this.filesToUpload = <Array<File>>fileInput.target.files;
	}

}